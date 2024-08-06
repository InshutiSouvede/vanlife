import HostVans from "./vans/HostVans";

export default function Dashboard() {
  return (
    <>
      <div className="px-10 bg-[#FFEAD0]  flex flex-col gap-5 py-5">
        <h1 className="font-semibold text-3xl">Welcome!</h1>
        <div className="flex text-xl justify-between">
          <p>
            Income last <span className="underline">30 days</span>
          </p>
          <p>Details</p>
        </div>
        <p className="font-bold text-3xl">$2,260</p>
      </div>
      <div className="p-10 text-xl bg-[#FFDDB2] flex justify-between mb-10">
        <div className="flex gap-5">
            <p className="font-bold">Review score</p>
            <div className="flex gap-1">
            <img src="./images/star.svg" alt="" />
            <p>  <span>5.0</span>/5</p>
            </div>
            
        </div>
        <p>Details</p>
      </div>
      <HostVans>
        <p className="cursor-pointer">Edit</p>
      </HostVans>
    </>
  );
}
