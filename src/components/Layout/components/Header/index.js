import { useState, useEffect } from 'react';
import {
    CloseCircleFilled,
    Loading3QuartersOutlined,
    SearchOutlined,
    MenuOutlined,
    GlobalOutlined,
    AppstoreOutlined,
    QuestionCircleOutlined,
    UserOutlined,
    DollarCircleOutlined,
    SettingOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import AcountItem from '@/components/AcountItem';
import { wrapper as PopperWrapper } from '@/components/Popper';
import styles from './Header.module.scss';
import images from '@/assets/images';
import Button from '@/components/Button';
import Menu from '@/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '@/components/Icons';
import Image from '@/components/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <GlobalOutlined />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
            ],
        },
    },
    {
        icon: <QuestionCircleOutlined />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <AppstoreOutlined />,
        title: 'Keyboard shortcuts',
    },
];
console.log('🚀 ~ file: index.js ~ line 12 ~ Header ~ images.logo', images.logo);
function Header() {
    const currentUser = true;
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    // handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle language change
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <UserOutlined />,
            title: 'View profile',
            to: '@/aa',
        },
        {
            icon: <DollarCircleOutlined />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <SettingOutlined />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,

        {
            icon: <LogoutOutlined />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <HeadlessTippy
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
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 100]} content="upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon className={cx('icon')} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon className={cx('icon')} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon className={cx('icon')} />
                                    <span className={cx('inbox-number')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://paaa16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_100x100.jpeg?x-expires=1652666400&x-signature=oaxyjUQbGF3OSlQICuWa9SaUkv0%3D"
                                className={cx('user-avatar')}
                                alt="nguyen a"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <MenuOutlined />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
