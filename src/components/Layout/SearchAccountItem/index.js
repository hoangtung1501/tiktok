import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/031b53938fb35b444eb02c61d2223213~c5_100x100.jpeg?x-expires=1665370800&x-signature=tViRzpB1BrPnoRdpTx8Q%2F72%2Fgzw%3D"
                alt="Trang"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Truong hoang Tung</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('user-name')}>hoangtung1501</span>
            </div>
        </div>
    );
}

export default AccountItem;
