import { FieldForm, Fields } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <div style={{ width: 500 }}>
      <FieldForm>
        <Fields.DatePicker label="日期" name="date" required />
        <Fields.DatePicker
          label="日期"
          name="date2"
          required
          formatType="DD.MM.YYYY"
        />
        <Fields.DatePicker label="日期时间" name="date1" required isShowTime />
        <Fields.DateRangePicker label="日期范围" name="dateRange1" required />
        <Fields.DateRangePicker
          label="日期时间范围"
          name="dateRange2"
          required
          isShowTime
        />
      </FieldForm>
    </div>
  );
};
