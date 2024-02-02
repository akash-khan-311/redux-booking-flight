

const Header = () => {
  return (
    <>
      <header id="header">
        <div className="container">
         <div className="flex items-center gap-x-3">
         <img src="./src/assets/images/me2.png"  alt="logo" className="w-16 h-16" />
         <h2 className="text-orange-500 text-2xl font-bold italic">Akash Khan</h2>
         </div>
          <div className="flex items-center">
            <a className="text-white min-w-[50px] font-medium" href="#">
              Home
            </a>
            <button className="log-btn btn">Login</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
