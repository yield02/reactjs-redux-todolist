import './Button.scss'

function Button({className, children, onClick, ...props}) {
    return <button className={className} onClick={onClick} {...props}>{children}</button>
}

export default Button;