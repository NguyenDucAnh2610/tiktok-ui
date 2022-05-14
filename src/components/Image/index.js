import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '@/assets/images';
import styles from './Image.module.scss';

function Image({ src, alt, className, fallback: customizeFallback = images.noImage, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customizeFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            {...props}
            ref={ref}
            src={fallback || src}
            alt={alt}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
