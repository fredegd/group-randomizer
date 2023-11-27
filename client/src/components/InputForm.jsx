

export default function InputForm() {
  return (
    <form className="w-full flex flex-col items-center">
      <input type="text" placeholder="batchName" className="w-10/12 my-3" />

      <input type="text" placeholder="instructor" className="w-10/12 my-3" />

      <div className="w-10/12 flex">
        <input type="text" placeholder="member" className="w-10/12 my-3" />
        <button className="w-2/12 my-3">+</button>
      </div>
    </form>
  );
}
