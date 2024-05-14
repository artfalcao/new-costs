import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className={`grid lg:grid-cols-2`}>
      <section className={`hidden lg:flex justify-center items-center w-100 h-screen bg-yellow-500`}>
        <img src='./home_img.svg' alt='Pig and coin' width={500} height={500}/>
      </section>

      <section className={`w-9/12 mx-auto pt-8 flex flex-col gap-2 justify-center`}>
        <div className={`flex flex-nowrap gap-2 justify-center items-center`}>
          <h1 className={`min-w-max text-5xl font-medium`}>Welcome to</h1>
          <span className="max-h-min font-bold uppercase text-6xl text-yellow-500 bg-secondary rounded-lg p-1">Costs!</span>
        </div>

        <LoginForm />
      </section>
    </div>
  )
};

export default Login;