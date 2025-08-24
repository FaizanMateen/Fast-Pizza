function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
}

//------------------> Another way of loading a spinner/Loading Spinner
// function Loader() {
//   return (
//     <div class="absolute z-10 flex h-full w-full items-center justify-center bg-red-200/50">
//       <div class="loader flex items-center"></div>
//     </div>
//   );
// }

export default Loader;
