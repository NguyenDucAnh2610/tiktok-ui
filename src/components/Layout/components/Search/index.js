import { useState, useEffect, useRef } from 'react';
import { CloseCircleFilled, Loading3QuartersOutlined } from '@ant-design/icons';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { SearchIcon } from '@/components/Icons';

import { wrapper as PopperWrapper } from '@/components/Popper';
import AcountItem from '@/components/AcountItem';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 1, 1, 1, 1]);
        }, 0);
    }, []);

    function handleClear() {
        setSearchResult([]);
        setSearchValue('');
        inputRef.current.focus();
    }
    function handleHideResult() {
        setShowResult(false);
    }

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
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
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && (
                    <button onClick={handleClear} className={cx('clear')}>
                        <CloseCircleFilled />
                    </button>
                )}
                {/* <Loading3QuartersOutlined className={cx('loading')} /> */}
                <button className={cx('search-button')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
