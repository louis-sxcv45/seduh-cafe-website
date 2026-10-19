import logo from "../../../../assets/images/logo.png";
import styles from "./BrandPanel.module.css";

const BrandPanel = () => {
  return (
      <div className="px-12 py-13.25 flex flex-col h-full justify-between">
        <img src={logo} alt="Logo" className="w-40"></img>

        <div className="">
            <h1 className="font-serif font-semibold text-[2.75rem]/[3.25rem] text-white">Kelola setiap cangkir, dari pesanan masuk sampai pelanggan 
                <span className="text-seduh italic"> tersenyum</span>.
            </h1>
            <p className="mt-5 text-description font-sans font-medium text-base">Dashboard Seduh untuk tim WPU Cafe — pantau pesanan real-time, ubah status, dan dengarkan ulasan pelanggan.</p>
        </div>

        <div className="">
            hahahaha
        </div>
      </div>
  );
};

export default BrandPanel;
