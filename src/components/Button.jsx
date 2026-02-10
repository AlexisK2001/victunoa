import '../styles/components/Button.css';

export default function Button({
    children,
    variant = 'primary',
    size = 'normal',
    href,
    onClick,
    type = 'button',
    className = '',
    ...props
}) {
    const classes = `btn btn-${variant} ${size === 'large' ? 'btn-large' : ''} ${className}`.trim();

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} className={classes} onClick={onClick} {...props}>
            {children}
        </button>
    );
}
