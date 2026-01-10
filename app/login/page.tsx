export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <form className="gap-2 flex flex-col">
        <div className="flex flex-col gap-2 bg-white dark:bg-black p-8 rounded-xl shadow-lg">
          <h1 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50 text-center">
            Login
          </h1>
          {["email", "password"].map((type) => (
            <input
              key={type}
              type={type}
              placeholder={type === "email" ? "E-Mail" : "Password"}
              className="w-full px-4 py-2 rounded-xl dark:bg-black border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          ))}

          <button
            type="submit"
            className="w-full py-2 rounded-xl bg-white hover:bg-indigo-500 transition font-medium text-black"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
