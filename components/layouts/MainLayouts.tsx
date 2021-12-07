import React from 'react';
import {Header, LeftNavbar, RightComments} from '../index';
import clsx from 'clsx';


interface MainLayoutsProps {
    hideComments?: boolean,
    hideMenu?: boolean,
    hideFullMenu?: boolean,
    contentWidth?: 'middle' | 'full',
    className?: string,
}

const MainLayouts: React.FC<MainLayoutsProps> = ({
    children,
    contentWidth,
    hideComments,
    hideMenu,
    hideFullMenu,
    className,
}) => {
    return (
        <>
            <div className={clsx('wrapper', className)}>
                {!hideFullMenu &&
                    <div className={clsx(hideMenu && 'hide')}>
                        <LeftNavbar />
                    </div>
                }
                <div className={clsx('content', {
                    'content--middle': contentWidth === 'middle',
                    'content--full': contentWidth === 'full',
                })}>
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
