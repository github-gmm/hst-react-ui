import { Space } from 'antd';
import { compare } from 'hst-react-ui';
import React from 'react';

const renderResult = (result: boolean) => (result ? 'true' : 'false');

export default () => {
  return (
    <Space>
      <Space direction="vertical">
        <span>Compare numbers</span>
        <div
          style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column' }}
        >
          <span>1.1 &gt; 1.1: {renderResult(compare('1.1', '>', '1.1'))}</span>
          <span>1.1 &gt; 1: {renderResult(compare('1.1', '>', '1'))}</span>
          <span>0 &gt; 1: {renderResult(compare('0', '>', '1'))}</span>
          <span>0 &gt; 0.000: {renderResult(compare('0', '>', '0.000'))}</span>

          <span>1.1 &lt; 1.1: {renderResult(compare('1.1', '<', '1.1'))}</span>
          <span>1.1 &lt; 1: {renderResult(compare('1.1', '<', '1'))}</span>
          <span>0 &lt; 1: {renderResult(compare('0', '<', '1'))}</span>
          <span>0 &lt; 0.000: {renderResult(compare('0', '<', '0.000'))}</span>

          <span>1.1 = 1.1: {renderResult(compare('1.1', '=', '1.1'))}</span>
          <span>1.1 = 1: {renderResult(compare('1.1', '=', '1'))}</span>
          <span>0 = 1: {renderResult(compare('0', '=', '1'))}</span>
          <span>0 = 0.000: {renderResult(compare('0', '=', '0.000'))}</span>

          <span>
            1.1 &gt;= 1.1: {renderResult(compare('1.1', '>=', '1.1'))}
          </span>
          <span>
            0 &lt;= 0.000: {renderResult(compare('0', '<=', '0.000'))}
          </span>
        </div>
      </Space>
    </Space>
  );
};
