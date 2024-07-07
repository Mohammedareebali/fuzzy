'use client';

import React from 'react';
import Link from 'next/link';
import { Menu, Dropdown, Button } from 'antd/lib';
import { MenuOutlined } from '@ant-design/icons';

const AppMenu: React.FC = () => {
  const menu = (
    <Menu className='bg-black text-white'>
      <Menu.Item key="products" className='hover:bg-gray-700'>
        <Link href="#">Products</Link>
      </Menu.Item>
      <Menu.Item key="pricing" className='hover:bg-gray-700'>
        <Link href="#">Pricing</Link>
      </Menu.Item>
      <Menu.Item key="clients" className='hover:bg-gray-700'>
        <Link href="#">Clients</Link>
      </Menu.Item>
      <Menu.Item key="resources" className='hover:bg-gray-700'>
        <Link href="#">Resources</Link>
      </Menu.Item>
      <Menu.Item key="documentation" className='hover:bg-gray-700'>
        <Link href="#">Documentation</Link>
      </Menu.Item>
      <Menu.Item key="enterprise" className='hover:bg-gray-700'>
        <Link href="#">Enterprise</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" className='bg-black text-white'>
      <Button className='bg-black text-white hover:!bg-black !border-white' icon={<MenuOutlined className='text-white' />} />
    </Dropdown>
  );
};

export default AppMenu;
