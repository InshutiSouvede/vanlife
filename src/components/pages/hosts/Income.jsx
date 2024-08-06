export default function Income() {
  return (
    <div className="p-10 flex flex-col gap-10 text-xl mb-10">
      <h1 className="font-semibold">Income</h1>
      <p>
        Last <span className="underline">30 days</span>
      </p>

      <p className="font-bold text-6xl">$2,260</p>
      <img src="/images/income-graph.png" className="w-max" alt="" />
      <h2 className="font-bold">Your transactions(3)</h2>
      <div className="flex flex-col gap-5">
        <div className="bg-white rounded-lg py-5 px-10 flex justify-between">
          <p className="text-3xl">$720</p>
          <p className="text-xl">1/12/22</p>
        </div>
        <div className="bg-white rounded-lg py-5 px-10 flex justify-between">
          <p className="text-3xl">$560</p>
          <p className="text-xl">10/11/22</p>
        </div>
        <div className="bg-white rounded-lg py-5 px-10 flex justify-between">
          <p className="text-3xl">$980</p>
          <p className="text-xl">23/11/22</p>
        </div>
        
      </div>
    </div>
  );
}
