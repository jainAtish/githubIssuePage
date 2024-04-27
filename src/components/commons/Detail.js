import React from 'react';

const Detail = ({
  tagBackgroundColor, tagPadding, tag, tagHref,
  valueBackgroundColor, valuePadding, value, valueHref,
}) => (
  <div className='DetailContainer'>
    <a className='DetailTagContainer'
      style={{ '--background-color': tagBackgroundColor, padding:tagPadding}}
      href={tagHref}
    >
      {tag}
    </a>
    <a className='DetailValueContainer'
      style={{ '--background-color': valueBackgroundColor, padding:valuePadding}}
      href={valueHref}
    >
      {value}
    </a>
  </div>
);

export default Detail;

