function HeadingBar() {
  return (
    <div className="w-[327px] flex flex-col justify-center gap-9 mt-8">
      <div className="flex items-center justify-between">
        <h1>devfinder</h1>
        <div className="flex items-center gap-4">
          <span>DARK</span>
          <img src="./public/assets/icon-moon.svg" alt="moon_icon" />
        </div>
      </div>
      <section className="w-[327px] flex items-center">
        <img src="./public/assets/icon-search.svg" alt="search_icon" />
        <input type="text" />
        <span>No results</span>
        <button>Search</button>
      </section>
    </div>
  );
}

export default HeadingBar;
