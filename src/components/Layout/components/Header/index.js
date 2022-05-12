import { useState, useEffect } from 'react';
import { CloseCircleFilled, Loading3QuartersOutlined, SearchOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import AcountItem from '@/components/AcountItem';
import { wrapper as PopperWrapper } from '@/components/Popper';
import styles from './Header.module.scss';
import images from '@/assets/images';

const cx = classNames.bind(styles);
console.log('🚀 ~ file: index.js ~ line 12 ~ Header ~ images.logo', images.logo);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AcountItem />
                                <AcountItem />
                                <AcountItem />
                                <AcountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <CloseCircleFilled />
                        </button>
                        <Loading3QuartersOutlined className={cx('loading')} />
                        <button className={cx('search-button')}>
                            <SearchOutlined />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;
