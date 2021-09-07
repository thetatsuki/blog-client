import React from 'react';
import {Header, LeftNavbar, RightComments} from '../components';
import clsx from 'clsx';


interface MainLayoutsProps {
    hideComments?: boolean,
    hideMenu?: boolean,
    hideFullMenu?: boolean,
    contentFullWidth?: boolean,
    className?: string,
}

const MainLayouts: React.FC<MainLayoutsProps> = ({
    children,
    contentFullWidth,
    hideComments,
    hideMenu,
    hideFullMenu,
    className,
}) => {
    return (
        <>
            <Header/>
            <div className={clsx('wrapper', className)}>
                {!hideFullMenu &&
                    <div className={clsx(hideMenu && 'hide')}>
                        <LeftNavbar />
                    </div>
                }
                <div className={clsx('content', {'content--full': contentFullWidth})}>
                    {children}
                </div>
                {!hideComments &&
                    <div className="rightSide">
                        <RightComments />
                    </div>
                }
            </div>
        </>
    );
};

export default MainLayouts;
