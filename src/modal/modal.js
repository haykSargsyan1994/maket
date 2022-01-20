import css from './modal.module.css'

const Modal =({children,close})=>{
    return(
        <div className={css.mask} onClick={close}>
            <div className={css.modal} onClick={e=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal