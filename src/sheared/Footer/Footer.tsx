

const Footer = () => {

  return (
    <footer className="footer bg-black text-white pt-2 md:pt-52 pb-2 md:pb-28 px-4 md:px-8">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-white">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn bg-red-700 text-white hover:bg-red-700 hover:text-white outline-none join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
  )
}



export default Footer