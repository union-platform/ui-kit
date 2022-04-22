// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import BrandColors from '../Colors/BrandColors/BrandColors';
import GrayShades from '../Colors/GrayShades/GrayShades';
import Heading4 from '../Typography/Heading4/Heading4';
import Dot from '../Dot/Dot';

export interface AvatarProps {
  /**
   *  Avatar image URL. If not added, shows `fallbackValue` by default
   */
   src?: string;
  /**
   *  Alt attribute for avatar image
   */
   alt?: string;
  /**
   *  Delay for photo fallback in milliseconds
   */
   delayMs?: number;
  /**
   *  Size in pixels.
   */
   size?: number;
  /**
   *  Shows indicator on avatar, like green 'online' badge.
   */
   active?: boolean;
  /**
   *  Size in pixels for indicator that shows if `active` is true.
   */
   activeBadgeSize?: number;
  /**
   *  Fallback value, can be initials, like "DA"
   */
   fallbackValue?: string;
}
const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  userSelect: 'none',
  borderRadius: '100%',
  backgroundColor: GrayShades.dark,
  position: 'relative',
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '100%',
  justifyContent: 'center',
  backgroundColor: GrayShades.extraLightGray,
  color: BrandColors.darkGreen,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

const ActiveBadge = styled(Dot, {
  position: 'absolute',
  right: 0,
  bottom: 0,
  width: 12,
  height: 12,
  border: `solid 1px ${GrayShades.white}`,
});

/**
 *  An image element with a fallback for representing the user.
 */
const Avatar = ({
  src, alt, delayMs, fallbackValue, size, active, activeBadgeSize, ...props
}: AvatarProps) => (
  <StyledAvatar
    css={{
      width: size,
      height: size,
    }}
    {...props}
  >
    <StyledImage
      src={src}
      alt={alt}
    />
    {active && (
    <ActiveBadge variant="positive" size={activeBadgeSize} />
    )}
    <StyledFallback delayMs={delayMs}>
      <Heading4 weight="bold">{fallbackValue}</Heading4>
    </StyledFallback>
  </StyledAvatar>
);

Avatar.defaultProps = {
  src: undefined,
  alt: undefined,
  active: undefined,
  delayMs: 600,
  size: 24,
  activeBadgeSize: 12,
  fallbackValue: undefined,
};

export default Avatar;
