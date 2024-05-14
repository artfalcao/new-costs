import { createAppSlice } from '../../createAppSlice';
import { User } from '@/types/user';
import { getUserData } from './userAPI';

interface UserSlice extends User {
  status: "idle" | "loading" | "failed";
};

const initialState: UserSlice = {
  name: '',
  categories: [],
  projects: [],
  status: 'idle'
};

export const userSlice = createAppSlice({
  name: "user",
  initialState,
  reducers: (create) => ({
    getUser: create.asyncThunk(
      async () => {
        const response = await getUserData();
        return response.data;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
        },
        rejected: (state) => {
          state.status = "failed";
        },
      },
    ),
  }),
  selectors: {
    selectUser: (userSlice) => {
      const { status, ...user } = userSlice;
      return user;
    },
    selectStatus: (userSlice) => userSlice.status,
  },
});

export const { getUser } =
  userSlice.actions;

export const { selectUser, selectStatus } = userSlice.selectors;
