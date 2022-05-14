import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { LeftOutlined } from '@ant-design/icons';
const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <LeftOutlined />
                <h4 className={cx('header-title')}>{title}</h4>
            </button>
        </header>
    );
}

export default Header;
