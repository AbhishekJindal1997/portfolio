import React, { Component } from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const Navigation = () => {
  return (
    <div className='navBar'>
      <Tabs defaultActiveKey='1' centered>
        <TabPane tab='Home' key='1'>
          one
        </TabPane>
        <TabPane tab='About' key='2'>
          two
        </TabPane>
        <TabPane tab='Services' key='3'>
          Banner image with some text
        </TabPane>
        <TabPane tab='Contact' key='4'>
          Banner image with some text
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Navigation;
