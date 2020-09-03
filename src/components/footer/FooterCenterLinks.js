import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import titleize from 'titleize';

import Link from '../link';

const FooterCenterLink = styled(Link)`
  transition: all 200ms ease-in;
  ${tw`text-boost-secondary-70 hover:text-boost-secondary hover:opacity-100
    relative text-sm pb-2`}

  &.active {
    ${tw`text-boost-primary`}
  }
`;

const FOOTER_CENTER_LINKS = [{
  id: 'home',
  to: '/home',
}, {
  id: 'features',
  to: '/features',
}, {
  id: 'integrations',
  to: '/integrations',
}, {
  id: 'pricing',
  to: '/pricing',
}, {
  id: 'blog',
  to: '/blog',
}, {
  id: 'contact',
  to: '/contact',
}, {
  id: 'about-us',
  to: '/about-us',
}, {
  id: 'help',
  to: 'https://help.lawmatics.com',
}, {
  id: 'api-documentation',
  to: 'https://docs.lawmatics.com',
}, {
  id: 'system-status',
  to: 'http://status.lawmatics.com',
}, {
  id: 'privacy-policy',
  to: '/privacy-policy',
}, {
  id: 'api-documentation',
  to: 'https://docs.lawmatics.com',
}, {
  id: 'terms-of-use',
  to: '/terms-of-use',
}];

const MAX_LINKS_PER_COLUMN = 5;

const NUM_LINK_COLUMNS = Math.ceil(FOOTER_CENTER_LINKS.length / MAX_LINKS_PER_COLUMN);

const renderLinkTitle = (id, title) =>
  title || titleize(id.replace(/[-]+/g, ' '));

const renderLink = ({ to, id, title }) =>
  <FooterCenterLink key={id} to={to}>{renderLinkTitle(id, title)}</FooterCenterLink>;

// This function buckets link data structure for autoflowing columns
const bucketLinks = FOOTER_CENTER_LINKS.reduce((acc, curr, idx) => {
  const bucketIdx = Math.floor(idx / MAX_LINKS_PER_COLUMN);
  acc[bucketIdx] = [].concat((acc[bucketIdx] || []), curr);
  return acc;
}, []);

const renderBucket = (bucketedLinks, i) => (
  <div key={i} className={`flex flex-col w-1/${NUM_LINK_COLUMNS}`}>
    {bucketedLinks.map(renderLink)}
  </div>
);

const FooterCenterLinks = () => bucketLinks.map(renderBucket);

export default FooterCenterLinks;
