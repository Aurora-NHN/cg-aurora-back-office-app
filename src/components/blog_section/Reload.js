import React, {useState} from 'react';
import clsx from "clsx";
import styles from "~/components/blog_section/blog.module.scss";

function Reload({onReload}) {
    const [disableReload, setDisableReload] = useState(false);

    const handleReload = () => {

        if (!disableReload) {
            onReload()
        }
        setDisableReload(true)
        setTimeout(() => {
            setDisableReload(false)
        }, 5000)
    }
    return (
        <div className={clsx("position-absolute start-0 d-flex align-items-center"
            ,styles.reloadWrapper
            , {"cursor-pointer": !disableReload})}
             onClick={handleReload}
        >
            <div className={clsx({[styles.reload]: !disableReload}, styles.reloadBtn, "ms-4")}>
                <i className={clsx("mdi mdi-reload fs-3", {"text-secondary opacity-50": disableReload})}></i>
            </div>
            <div className="ms-2">Reload</div>
        </div>
    );
}

export default Reload;