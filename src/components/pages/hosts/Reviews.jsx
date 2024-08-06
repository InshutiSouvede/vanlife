export default function Reviews() {
  return (
    <div className=" flex flex-col gap-10 p-10 text-xl mb-10">
      <div className="flex items-baseline gap-10">
        <h1 className="font-bold text-3xl">Your reviews</h1>
        <p>
          last <span className="underline">30 days</span>
        </p>
      </div>
      <img src="/images/reviews-graph.png" className="w-max" alt="" />

      <h2 className="font-semibold">Reviews (2)</h2>
      <div className="flex flex-col gap-5">
        <div className="flex">
          <img src="/images/star.svg" alt="" />
          <img src="/images/star.svg" alt="" />
          <img src="/images/star.svg" alt="" />
          <img src="/images/star.svg" alt="" />
          <img src="/images/star.svg" alt="" />
        </div>
        <p>
          Elliot <span className="text-[#8C8C8C]">December 1, 2022</span>
        </p>
        <p>
          The beach bum is such as awesome van! Such as comfortable trip. We had
          it for 2 weeks and there was not a single issue. Super clean when we
          picked it up and the host is very comfortable and understanding.
          Highly recommend!
        </p>
        <hr/>
        <div className="flex">
          <img src="/images/star.svg" alt="" />
          <img src="/images/star.svg" alt="" />
          <img src="/images/star.svg" alt="" />
          <img src="/images/star.svg" alt="" />
          <img src="/images/star.svg" alt="" />
        </div>
        <p>
          Elliot <span className="text-[#8C8C8C]">December 1, 2022</span>
        </p>
        <p>
          The beach bum is such as awesome van! Such as comfortable trip. We had
          it for 2 weeks and there was not a single issue. Super clean when we
          picked it up and the host is very comfortable and understanding.
          Highly recommend!
        </p>
        <hr/>
      </div>
    </div>
  );
}
