import { o as __toESM } from "../_runtime.mjs";
import { H as require_react } from "./@tanstack/react-router+[...].mjs";
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* @license lucide-react v1.59.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toKebabCase = (string) => string?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs
/**
* @license lucide-react v1.59.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
function toLucideIconData(iconName, iconNode, aliases = []) {
	if (iconNode == null) throw new Error("[lucide]: iconNode is required when icon name is used");
	return {
		name: toKebabCase(iconName),
		size: 24,
		node: iconNode,
		...aliases.length > 0 ? { aliases } : {}
	};
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
/**
* @license lucide-react v1.59.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toCamelCase = (string) => {
	let out = "";
	let upperNext = false;
	for (const ch of string) {
		if (ch === "-" || ch === "_" || ch <= " ") {
			upperNext = out.length > 0;
			continue;
		}
		if (out.length === 0) out += ch.toLowerCase();
		else out += upperNext ? ch.toUpperCase() : ch;
		upperNext = false;
	}
	return out;
};
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs
/**
* @license lucide-react v1.59.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toPascalCase = (string) => {
	const camelCase = toCamelCase(string);
	return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
/**
* @license lucide-react v1.59.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs
/**
* @license lucide-react v1.59.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
};
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs
/**
* @license lucide-react v1.59.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
function isDefined(value) {
	return value !== null && value !== void 0;
}
function buildLucideIconNode(icon, params = {}) {
	const attributeNames = params.attributeNames ?? {};
	const getAttributeName = (attributeName) => attributeNames[attributeName] ?? attributeName;
	const viewBoxWidth = icon.size ?? icon.width ?? defaultAttributes["width"];
	const viewBoxHeight = icon.size ?? icon.height ?? defaultAttributes["height"];
	const aliasClassNames = icon.aliases?.filter((alias) => typeof alias === "string" && alias.trim() !== "").map((alias) => `lucide-${alias}`) ?? [];
	const iconClassNames = [...icon.name ? [`lucide-${icon.name}`] : [], ...aliasClassNames];
	const classNamesFromClassName = params.className?.split(" ").filter(Boolean) ?? [];
	const className = params.includeDefaultClasses === false ? mergeClasses(...classNamesFromClassName) : mergeClasses("lucide", ...iconClassNames, ...classNamesFromClassName);
	const calculatedStrokeWidth = params.absoluteStrokeWidth ? Number(params.strokeWidth ?? defaultAttributes["stroke-width"]) * Number(icon.size ?? icon.width ?? defaultAttributes["width"]) / Number(params.size ?? params.width ?? defaultAttributes["width"]) : params.strokeWidth ?? defaultAttributes["stroke-width"];
	return [
		"svg",
		{
			...Object.entries(defaultAttributes).reduce((attrs, [attrName, value]) => {
				attrs[getAttributeName(attrName)] = value;
				return attrs;
			}, {}),
			..."color" in params && params.color && { [getAttributeName("stroke")]: params.color },
			..."size" in params && isDefined(params.size) && {
				[getAttributeName("width")]: params.size,
				[getAttributeName("height")]: params.size
			},
			..."width" in params && isDefined(params.width) && { [getAttributeName("width")]: params.width },
			..."height" in params && isDefined(params.height) && { [getAttributeName("height")]: params.height },
			[getAttributeName("stroke-width")]: calculatedStrokeWidth,
			...className && { [getAttributeName("class")]: className },
			[getAttributeName("viewBox")]: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
			...params.hasA11yProp === false ? { [getAttributeName("aria-hidden")]: "true" } : {},
			..."attributes" in params && params.attributes
		},
		icon.node.map((child) => {
			const [name, attrs, children] = child;
			const nextAttrs = params.nonScalingStroke ? {
				[getAttributeName("vector-effect")]: "non-scaling-stroke",
				...attrs
			} : attrs;
			return children ? [
				name,
				nextAttrs,
				children
			] : [name, nextAttrs];
		})
	];
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs
/**
* @license lucide-react v1.59.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
function buildLucideIconForReact(icon, params = {}) {
	return buildLucideIconNode(icon, {
		...params,
		attributeNames: {
			...params.attributeNames,
			class: "className",
			"stroke-width": "strokeWidth",
			"stroke-linecap": "strokeLinecap",
			"stroke-linejoin": "strokeLinejoin",
			"vector-effect": "vectorEffect"
		}
	});
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs
/**
* @license lucide-react v1.59.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
//#endregion
//#region node_modules/lucide-react/dist/esm/context.mjs
/**
* @license lucide-react v1.59.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LucideContext = (0, import_react.createContext)({});
var useLucideContext = () => (0, import_react.useContext)(LucideContext);
//#endregion
//#region node_modules/lucide-react/dist/esm/Icon.mjs
/**
* @license lucide-react v1.59.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Icon = (0, import_react.forwardRef)(({ color, size, width, height, strokeWidth, absoluteStrokeWidth, nonScalingStroke, className = "", children, iconNode = [], icon = {
	node: iconNode,
	aliases: [],
	size: 24
}, ...rest }, ref) => {
	const { size: contextSize = 24, strokeWidth: contextStrokeWidth = 2, absoluteStrokeWidth: contextAbsoluteStrokeWidth = false, nonScalingStroke: contextNonScalingStroke = false, color: contextColor = "currentColor", className: contextClass = "" } = useLucideContext() ?? {};
	const hasAccessibleProp = Boolean(children) || hasA11yProp(rest);
	const [name, svgAttributes, builtIconNode = []] = buildLucideIconForReact(icon, {
		color: color ?? contextColor,
		width: width ?? size ?? contextSize,
		height: height ?? size ?? contextSize,
		strokeWidth: strokeWidth ?? contextStrokeWidth,
		absoluteStrokeWidth: absoluteStrokeWidth ?? contextAbsoluteStrokeWidth,
		nonScalingStroke: nonScalingStroke ?? contextNonScalingStroke,
		className: mergeClasses(contextClass, className),
		hasA11yProp: hasAccessibleProp,
		attributes: rest
	});
	return (0, import_react.createElement)(name, {
		ref,
		...svgAttributes
	}, [...builtIconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)), ...Array.isArray(children) ? children : [children]]);
});
//#endregion
//#region node_modules/lucide-react/dist/esm/createLucideIcon.mjs
/**
* @license lucide-react v1.59.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
function createLucideIcon(iconDataOrName, iconNode = [], aliases = []) {
	const iconData = typeof iconDataOrName === "string" ? toLucideIconData(iconDataOrName, iconNode, aliases) : iconDataOrName;
	const Component = (0, import_react.forwardRef)(({ className, ...props }, ref) => (0, import_react.createElement)(Icon, {
		ref,
		icon: iconData,
		className,
		...props
	}));
	if (iconData.name) Component.displayName = toPascalCase(iconData.name);
	return Component;
}
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/lightbulb.mjs
/**
* @license lucide-react v1.59.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var __iconData$3 = {
	name: "lightbulb",
	size: 24,
	node: [
		["path", {
			d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
			key: "1gvzjb"
		}],
		["path", {
			d: "M9 18h6",
			key: "x1upvd"
		}],
		["path", {
			d: "M10 22h4",
			key: "ceow96"
		}]
	]
};
__iconData$3.node;
var Lightbulb = createLucideIcon(__iconData$3);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/message-square.mjs
/**
* @license lucide-react v1.59.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var __iconData$2 = {
	name: "message-square",
	size: 24,
	node: [["path", {
		d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
		key: "18887p"
	}]]
};
__iconData$2.node;
var MessageSquare = createLucideIcon(__iconData$2);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/palette.mjs
/**
* @license lucide-react v1.59.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var __iconData$1 = {
	name: "palette",
	size: 24,
	node: [
		["path", {
			d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
			key: "e79jfc"
		}],
		["circle", {
			cx: "13.5",
			cy: "6.5",
			r: ".5",
			fill: "currentColor",
			key: "1okk4w"
		}],
		["circle", {
			cx: "17.5",
			cy: "10.5",
			r: ".5",
			fill: "currentColor",
			key: "f64h9f"
		}],
		["circle", {
			cx: "6.5",
			cy: "12.5",
			r: ".5",
			fill: "currentColor",
			key: "qy21gx"
		}],
		["circle", {
			cx: "8.5",
			cy: "7.5",
			r: ".5",
			fill: "currentColor",
			key: "fotxhn"
		}]
	]
};
__iconData$1.node;
var Palette = createLucideIcon(__iconData$1);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/trees.mjs
/**
* @license lucide-react v1.59.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var __iconData = {
	name: "trees",
	size: 24,
	node: [
		["path", {
			d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",
			key: "1l6gj6"
		}],
		["path", {
			d: "M7 16v6",
			key: "1a82de"
		}],
		["path", {
			d: "M13 19v3",
			key: "13sx9i"
		}],
		["path", {
			d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",
			key: "1sj9kv"
		}]
	]
};
__iconData.node;
var Trees = createLucideIcon(__iconData);
//#endregion
export { Lightbulb as i, Palette as n, MessageSquare as r, Trees as t };
