import { styled } from "styled-components";

interface CaTextProps {
	color?: string;
	font?: string;
	fontSize?: string;
	gap?: string;
	iconSize?: string;
	fontWeight?: string;
	width?: string;
	height?: string;
	display?: string;
	overflow?: string;
	textoverflow?: string;
	hoverColor?: string;
	hoverBg?: string;
	clickable?: boolean;
	lineQuantity?: string;
	uppercase?: boolean;
	textDecoration?: string;
	margin?: string;
	className?: string;
	underline?: boolean;
}

export const Text = styled.span`
	display: -webkit-box;
	overflow: hidden;
	text-overflow: ellipsis;
	vertical-align: center;
	word-wrap: break-word;
	-webkit-line-clamp: ${(props: CaTextProps) =>
		props.lineQuantity ? props.lineQuantity : "1"};
	-webkit-box-orient: vertical;
	color: ${(props: CaTextProps) => (props.color ? props.color : "inherit")};
	font-family: ${(props: any) => (props.font ? props.font : "FiraGO-Regular")};
	font-size: ${(props: any) => (props.fontSize ? props.fontSize : "12px")};
	font-weight: ${(props: CaTextProps) =>
		props.fontWeight ? props.fontWeight : "400"};
	height: min-content;
	text-decoration: ${(props: CaTextProps) =>
		props.textDecoration ? props.textDecoration : "unset"};
	margin: ${(props: CaTextProps) => (props.margin ? props.margin : "0")};
	max-width: ${(props: any) => props.maxWidth && props.maxWidth};
	text-decoration: ${(props: CaTextProps) => props.underline && "underline"};
`