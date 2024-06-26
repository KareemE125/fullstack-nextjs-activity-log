import Image from "next/image";

export default function loading() {
  return (
    <main className="h-screen absolute inset-0 flex flex-col items-center p-4 bg-black">
      <section className="w-full h-4/5 flex flex-col justify-center items-center gap-6 ">
        <div className="animate-spin w-14 h-14 rounded-full border-[6px] border-r-white border-gray-600"></div>
        <p className="text-xl text-white"> Loading . . . </p>
      </section>
      <Image className="mt-auto" src="/instatus.png" alt="logo" width={150} height={100} />
    </main>
  );
}
