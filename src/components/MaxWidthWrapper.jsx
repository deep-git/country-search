import clsx from "clsx";
import "./MaxWidthWrapper.css";

const MaxWidthWrapper = ({ className, children }) => {
    return (
        <div className="wrapper">
            {children}
        </div>
    )
}

export default MaxWidthWrapper;