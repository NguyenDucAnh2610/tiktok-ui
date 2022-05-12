import { CheckCircleFilled } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';

const cx = classNames.bind(styles);

function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg"
                alt="xinh   "
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Duc Anh</span>
                    <CheckCircleFilled className={cx('check')} />
                </h4>
                <span className={cx('username')}>ducanh2610</span>
            </div>
        </div>
    );
}

export default AcountItem;
