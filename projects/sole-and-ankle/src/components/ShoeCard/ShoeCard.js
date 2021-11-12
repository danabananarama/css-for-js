import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import { formatPrice, pluralize, isNewShoe } from "../../utils";
import Spacer from "../Spacer";

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  return (
    <CardWrapper>
      <Link href={`/shoe/${slug}`}>
        <Wrapper>
          <ImageWrapper>
            <Image alt="" src={imageSrc} />
            {variant === "new-release" && (
              <NewRelease>Just Released!</NewRelease>
            )}
            {variant === "on-sale" && <Sale>Sale</Sale>}
          </ImageWrapper>
          <Spacer size={12} />
          <Row>
            <Name>{name}</Name>
            <Price onSale={variant === "on-sale"}>{formatPrice(price)}</Price>
          </Row>
          <Row>
            <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
            {variant === "on-sale" && (
              <SalePrice>{formatPrice(salePrice)}</SalePrice>
            )}
          </Row>
        </Wrapper>
      </Link>
    </CardWrapper>
  );
};

const Flag = styled.div`
  position: absolute;
  color: ${COLORS.white};
  padding: 8px;
  top: 12px;
  right: -4px;
`;

const NewRelease = styled(Flag)`
  background-color: ${COLORS.secondary};
`;

const Sale = styled(Flag)`
  background-color: ${COLORS.primary};
`;

const CardWrapper = styled.div``;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article``;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span`
  color: ${(p) => (p.onSale ? COLORS.gray[700] : "")};
  text-decoration: ${(p) => (p.onSale ? "line-through" : "")};
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default ShoeCard;
