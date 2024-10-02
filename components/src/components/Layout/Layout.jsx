import { Layout, Menu } from 'antd';
import Logiks from '@/assets/icons/Logo';
import clsx from 'clsx';
import UserMenu from '@/components/Complex/UserMenu';
import { PropTypes } from 'prop-types';
import { useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const CustomLayout = ({ navItems, viewItems }) => {
  const [curr, setCurr] = useState(navItems[0].key);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const currentNavItem = useMemo(() => navItems.find((item) => item.key === curr), [curr]);

  console.log(currentNavItem);

  return (
    <Layout className="h-100vh bg-grey-50">
      <Sider theme="light" width={260} className="border border-grey-500" trigger={null}>
        <div className="py-16 border-b border-grey-500 h-80">
          <Logiks className="w-120 h-48 mx-auto" />
        </div>
        <div className="p-24 border-b border-grey-500">
          <ul>
            {viewItems.map((view, index) => (
              <a key={index} href={view.link} target="_blank">
                <li
                  className={clsx(
                    'h-34 cursor-pointer px-12 py-6 text-dark-400 hover:text-dark-900 font-500 text-12 leading-16',
                    view.active && '!text-dark-900',
                  )}
                >
                  {view.title}
                </li>
              </a>
            ))}
          </ul>
        </div>
        <Menu
          onSelect={(e) => setCurr(e.key)}
          mode="inline"
          className="p-24 bg-grey-50 !border-none"
          defaultSelectedKeys={['1']}
          items={navItems}
        />
      </Sider>
      <Layout theme="light">
        <Header className="border-b border-grey-500 flex items-center justify-end">
          <UserMenu text="Welcome Levan" avatar="LN" />
        </Header>
        <Content className="p-24">
          <h1 className="text-dark-900 text-24 leading-32 font-600">{currentNavItem.title}</h1>
          <main className="mt-64">
            <Outlet />
          </main>
        </Content>
      </Layout>
    </Layout>
  );
};

CustomLayout.propTypes = {
  navItems: PropTypes.array,
  viewItems: PropTypes.array,
};

export default CustomLayout;
