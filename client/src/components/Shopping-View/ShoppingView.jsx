import { Outlet } from "react-router-dom";
import ShoppingViewHeader from "./ShoppingViewHeader";


const ShoppingView = () => {
    return (
        <div className="flex flex-col overflow-hidden bg-white">
            <ShoppingViewHeader/>
            <main className="flex flex-col w-full">
                <Outlet/>
            </main>
        </div>
    );
};

export default ShoppingView;