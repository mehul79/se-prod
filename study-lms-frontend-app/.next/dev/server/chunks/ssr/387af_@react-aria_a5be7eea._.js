module.exports = [
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/calculatePosition.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $6E71I$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "calculatePosition", ()=>$5935ba4d7da2c103$export$b3ceb0cbf1056d98);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $5935ba4d7da2c103$var$AXIS = {
    top: 'top',
    bottom: 'top',
    left: 'left',
    right: 'left'
};
const $5935ba4d7da2c103$var$FLIPPED_DIRECTION = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left'
};
const $5935ba4d7da2c103$var$CROSS_AXIS = {
    top: 'left',
    left: 'top'
};
const $5935ba4d7da2c103$var$AXIS_SIZE = {
    top: 'height',
    left: 'width'
};
const $5935ba4d7da2c103$var$TOTAL_SIZE = {
    width: 'totalWidth',
    height: 'totalHeight'
};
const $5935ba4d7da2c103$var$PARSED_PLACEMENT_CACHE = {};
let $5935ba4d7da2c103$var$visualViewport = typeof document !== 'undefined' ? window.visualViewport : null;
function $5935ba4d7da2c103$var$getContainerDimensions(containerNode) {
    let width = 0, height = 0, totalWidth = 0, totalHeight = 0, top = 0, left = 0;
    let scroll = {};
    var _visualViewport_scale;
    let isPinchZoomedIn = ((_visualViewport_scale = $5935ba4d7da2c103$var$visualViewport === null || $5935ba4d7da2c103$var$visualViewport === void 0 ? void 0 : $5935ba4d7da2c103$var$visualViewport.scale) !== null && _visualViewport_scale !== void 0 ? _visualViewport_scale : 1) > 1;
    if (containerNode.tagName === 'BODY') {
        let documentElement = document.documentElement;
        totalWidth = documentElement.clientWidth;
        totalHeight = documentElement.clientHeight;
        var _visualViewport_width;
        width = (_visualViewport_width = $5935ba4d7da2c103$var$visualViewport === null || $5935ba4d7da2c103$var$visualViewport === void 0 ? void 0 : $5935ba4d7da2c103$var$visualViewport.width) !== null && _visualViewport_width !== void 0 ? _visualViewport_width : totalWidth;
        var _visualViewport_height;
        height = (_visualViewport_height = $5935ba4d7da2c103$var$visualViewport === null || $5935ba4d7da2c103$var$visualViewport === void 0 ? void 0 : $5935ba4d7da2c103$var$visualViewport.height) !== null && _visualViewport_height !== void 0 ? _visualViewport_height : totalHeight;
        scroll.top = documentElement.scrollTop || containerNode.scrollTop;
        scroll.left = documentElement.scrollLeft || containerNode.scrollLeft;
        // The goal of the below is to get a top/left value that represents the top/left of the visual viewport with
        // respect to the layout viewport origin. This combined with the scrollTop/scrollLeft will allow us to calculate
        // coordinates/values with respect to the visual viewport or with respect to the layout viewport.
        if ($5935ba4d7da2c103$var$visualViewport) {
            top = $5935ba4d7da2c103$var$visualViewport.offsetTop;
            left = $5935ba4d7da2c103$var$visualViewport.offsetLeft;
        }
    } else {
        ({ width: width, height: height, top: top, left: left } = $5935ba4d7da2c103$var$getOffset(containerNode));
        scroll.top = containerNode.scrollTop;
        scroll.left = containerNode.scrollLeft;
        totalWidth = width;
        totalHeight = height;
    }
    if ((0, $6E71I$reactariautils.isWebKit)() && (containerNode.tagName === 'BODY' || containerNode.tagName === 'HTML') && isPinchZoomedIn) {
        // Safari will report a non-zero scrollTop/Left for the non-scrolling body/HTML element when pinch zoomed in unlike other browsers.
        // Set to zero for parity calculations so we get consistent positioning of overlays across all browsers.
        // Also switch to visualViewport.pageTop/pageLeft so that we still accomodate for scroll positioning for body/HTML elements that are actually scrollable
        // before pinch zoom happens
        scroll.top = 0;
        scroll.left = 0;
        var _visualViewport_pageTop;
        top = (_visualViewport_pageTop = $5935ba4d7da2c103$var$visualViewport === null || $5935ba4d7da2c103$var$visualViewport === void 0 ? void 0 : $5935ba4d7da2c103$var$visualViewport.pageTop) !== null && _visualViewport_pageTop !== void 0 ? _visualViewport_pageTop : 0;
        var _visualViewport_pageLeft;
        left = (_visualViewport_pageLeft = $5935ba4d7da2c103$var$visualViewport === null || $5935ba4d7da2c103$var$visualViewport === void 0 ? void 0 : $5935ba4d7da2c103$var$visualViewport.pageLeft) !== null && _visualViewport_pageLeft !== void 0 ? _visualViewport_pageLeft : 0;
    }
    return {
        width: width,
        height: height,
        totalWidth: totalWidth,
        totalHeight: totalHeight,
        scroll: scroll,
        top: top,
        left: left
    };
}
function $5935ba4d7da2c103$var$getScroll(node) {
    return {
        top: node.scrollTop,
        left: node.scrollLeft,
        width: node.scrollWidth,
        height: node.scrollHeight
    };
}
// Determines the amount of space required when moving the overlay to ensure it remains in the boundary
function $5935ba4d7da2c103$var$getDelta(axis, offset, size, // positioned within (most of the time this is the <body>).
boundaryDimensions, // positioned relative to (e.g. parent with position: relative).
// Usually this is the same as the boundary element, but if the popover
// is portaled somewhere other than the body and has an ancestor with
// position: relative/absolute, it will be different.
containerDimensions, padding, containerOffsetWithBoundary) {
    var _containerDimensions_scroll_axis;
    let containerScroll = (_containerDimensions_scroll_axis = containerDimensions.scroll[axis]) !== null && _containerDimensions_scroll_axis !== void 0 ? _containerDimensions_scroll_axis : 0;
    // The height/width of the boundary. Matches the axis along which we are adjusting the overlay position
    let boundarySize = boundaryDimensions[$5935ba4d7da2c103$var$AXIS_SIZE[axis]];
    // Calculate the edges of the boundary (accomodating for the boundary padding) and the edges of the overlay.
    // Note that these values are with respect to the visual viewport (aka 0,0 is the top left of the viewport)
    let boundaryStartEdge = boundaryDimensions.scroll[$5935ba4d7da2c103$var$AXIS[axis]] + padding;
    let boundaryEndEdge = boundarySize + boundaryDimensions.scroll[$5935ba4d7da2c103$var$AXIS[axis]] - padding;
    let startEdgeOffset = offset - containerScroll + containerOffsetWithBoundary[axis] - boundaryDimensions[$5935ba4d7da2c103$var$AXIS[axis]];
    let endEdgeOffset = offset - containerScroll + size + containerOffsetWithBoundary[axis] - boundaryDimensions[$5935ba4d7da2c103$var$AXIS[axis]];
    // If any of the overlay edges falls outside of the boundary, shift the overlay the required amount to align one of the overlay's
    // edges with the closest boundary edge.
    if (startEdgeOffset < boundaryStartEdge) return boundaryStartEdge - startEdgeOffset;
    else if (endEdgeOffset > boundaryEndEdge) return Math.max(boundaryEndEdge - endEdgeOffset, boundaryStartEdge - startEdgeOffset);
    else return 0;
}
function $5935ba4d7da2c103$var$getMargins(node) {
    let style = window.getComputedStyle(node);
    return {
        top: parseInt(style.marginTop, 10) || 0,
        bottom: parseInt(style.marginBottom, 10) || 0,
        left: parseInt(style.marginLeft, 10) || 0,
        right: parseInt(style.marginRight, 10) || 0
    };
}
function $5935ba4d7da2c103$var$parsePlacement(input) {
    if ($5935ba4d7da2c103$var$PARSED_PLACEMENT_CACHE[input]) return $5935ba4d7da2c103$var$PARSED_PLACEMENT_CACHE[input];
    let [placement, crossPlacement] = input.split(' ');
    let axis = $5935ba4d7da2c103$var$AXIS[placement] || 'right';
    let crossAxis = $5935ba4d7da2c103$var$CROSS_AXIS[axis];
    if (!$5935ba4d7da2c103$var$AXIS[crossPlacement]) crossPlacement = 'center';
    let size = $5935ba4d7da2c103$var$AXIS_SIZE[axis];
    let crossSize = $5935ba4d7da2c103$var$AXIS_SIZE[crossAxis];
    $5935ba4d7da2c103$var$PARSED_PLACEMENT_CACHE[input] = {
        placement: placement,
        crossPlacement: crossPlacement,
        axis: axis,
        crossAxis: crossAxis,
        size: size,
        crossSize: crossSize
    };
    return $5935ba4d7da2c103$var$PARSED_PLACEMENT_CACHE[input];
}
function $5935ba4d7da2c103$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset) {
    let { placement: placement, crossPlacement: crossPlacement, axis: axis, crossAxis: crossAxis, size: size, crossSize: crossSize } = placementInfo;
    let position = {};
    var _childOffset_crossAxis;
    // button position
    position[crossAxis] = (_childOffset_crossAxis = childOffset[crossAxis]) !== null && _childOffset_crossAxis !== void 0 ? _childOffset_crossAxis : 0;
    var _childOffset_crossSize, _overlaySize_crossSize, _childOffset_crossSize1, _overlaySize_crossSize1;
    if (crossPlacement === 'center') // at this point the overlay center should match the button center
    position[crossAxis] += (((_childOffset_crossSize = childOffset[crossSize]) !== null && _childOffset_crossSize !== void 0 ? _childOffset_crossSize : 0) - ((_overlaySize_crossSize = overlaySize[crossSize]) !== null && _overlaySize_crossSize !== void 0 ? _overlaySize_crossSize : 0)) / 2;
    else if (crossPlacement !== crossAxis) // at this point the overlay bottom should match the button bottom
    position[crossAxis] += ((_childOffset_crossSize1 = childOffset[crossSize]) !== null && _childOffset_crossSize1 !== void 0 ? _childOffset_crossSize1 : 0) - ((_overlaySize_crossSize1 = overlaySize[crossSize]) !== null && _overlaySize_crossSize1 !== void 0 ? _overlaySize_crossSize1 : 0);
    /* else {
    the overlay top should match the button top
  } */ position[crossAxis] += crossOffset;
    // overlay top overlapping arrow with button bottom
    const minPosition = childOffset[crossAxis] - overlaySize[crossSize] + arrowSize + arrowBoundaryOffset;
    // overlay bottom overlapping arrow with button top
    const maxPosition = childOffset[crossAxis] + childOffset[crossSize] - arrowSize - arrowBoundaryOffset;
    position[crossAxis] = (0, $6E71I$reactariautils.clamp)(position[crossAxis], minPosition, maxPosition);
    // Floor these so the position isn't placed on a partial pixel, only whole pixels. Shouldn't matter if it was floored or ceiled, so chose one.
    if (placement === axis) {
        // If the container is positioned (non-static), then we use the container's actual
        // height, as `bottom` will be relative to this height.  But if the container is static,
        // then it can only be the `document.body`, and `bottom` will be relative to _its_
        // container, which should be as large as boundaryDimensions.
        const containerHeight = isContainerPositioned ? containerOffsetWithBoundary[size] : boundaryDimensions[$5935ba4d7da2c103$var$TOTAL_SIZE[size]];
        position[$5935ba4d7da2c103$var$FLIPPED_DIRECTION[axis]] = Math.floor(containerHeight - childOffset[axis] + offset);
    } else position[axis] = Math.floor(childOffset[axis] + childOffset[size] + offset);
    return position;
}
function $5935ba4d7da2c103$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, isContainerPositioned, margins, padding, overlayHeight, heightGrowthDirection) {
    const containerHeight = isContainerPositioned ? containerOffsetWithBoundary.height : boundaryDimensions[$5935ba4d7da2c103$var$TOTAL_SIZE.height];
    var _position_bottom;
    // For cases where position is set via "bottom" instead of "top", we need to calculate the true overlay top with respect to the boundary. Reverse calculate this with the same method
    // used in computePosition.
    let overlayTop = position.top != null ? containerOffsetWithBoundary.top + position.top : containerOffsetWithBoundary.top + (containerHeight - ((_position_bottom = position.bottom) !== null && _position_bottom !== void 0 ? _position_bottom : 0) - overlayHeight);
    var _boundaryDimensions_scroll_top, _margins_top, _margins_bottom, _boundaryDimensions_scroll_top1, _margins_top1, _margins_bottom1;
    let maxHeight = heightGrowthDirection !== 'top' ? Math.max(0, boundaryDimensions.height + boundaryDimensions.top + ((_boundaryDimensions_scroll_top = boundaryDimensions.scroll.top) !== null && _boundaryDimensions_scroll_top !== void 0 ? _boundaryDimensions_scroll_top : 0) - overlayTop // this is the top of the overlay
     - (((_margins_top = margins.top) !== null && _margins_top !== void 0 ? _margins_top : 0) + ((_margins_bottom = margins.bottom) !== null && _margins_bottom !== void 0 ? _margins_bottom : 0) + padding // save additional space for margin and padding
    )) : Math.max(0, overlayTop + overlayHeight // this is the bottom of the overlay
     - (boundaryDimensions.top + ((_boundaryDimensions_scroll_top1 = boundaryDimensions.scroll.top) !== null && _boundaryDimensions_scroll_top1 !== void 0 ? _boundaryDimensions_scroll_top1 : 0) // this is the top of the boundary
    ) - (((_margins_top1 = margins.top) !== null && _margins_top1 !== void 0 ? _margins_top1 : 0) + ((_margins_bottom1 = margins.bottom) !== null && _margins_bottom1 !== void 0 ? _margins_bottom1 : 0) + padding // save additional space for margin and padding
    ));
    return Math.min(boundaryDimensions.height - padding * 2, maxHeight);
}
function $5935ba4d7da2c103$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding, placementInfo) {
    let { placement: placement, axis: axis, size: size } = placementInfo;
    var _boundaryDimensions_scroll_axis, _margins_axis;
    if (placement === axis) return Math.max(0, childOffset[axis] - boundaryDimensions[axis] - ((_boundaryDimensions_scroll_axis = boundaryDimensions.scroll[axis]) !== null && _boundaryDimensions_scroll_axis !== void 0 ? _boundaryDimensions_scroll_axis : 0) + containerOffsetWithBoundary[axis] - ((_margins_axis = margins[axis]) !== null && _margins_axis !== void 0 ? _margins_axis : 0) - margins[$5935ba4d7da2c103$var$FLIPPED_DIRECTION[axis]] - padding);
    var _margins_axis1;
    return Math.max(0, boundaryDimensions[size] + boundaryDimensions[axis] + boundaryDimensions.scroll[axis] - containerOffsetWithBoundary[axis] - childOffset[axis] - childOffset[size] - ((_margins_axis1 = margins[axis]) !== null && _margins_axis1 !== void 0 ? _margins_axis1 : 0) - margins[$5935ba4d7da2c103$var$FLIPPED_DIRECTION[axis]] - padding);
}
function $5935ba4d7da2c103$export$6839422d1f33cee9(placementInput, childOffset, overlaySize, scrollSize, margins, padding, flip, boundaryDimensions, containerDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, userSetMaxHeight, arrowSize, arrowBoundaryOffset) {
    let placementInfo = $5935ba4d7da2c103$var$parsePlacement(placementInput);
    let { size: size, crossAxis: crossAxis, crossSize: crossSize, placement: placement, crossPlacement: crossPlacement } = placementInfo;
    let position = $5935ba4d7da2c103$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset);
    let normalizedOffset = offset;
    let space = $5935ba4d7da2c103$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, placementInfo);
    // Check if the scroll size of the overlay is greater than the available space to determine if we need to flip
    if (flip && scrollSize[size] > space) {
        let flippedPlacementInfo = $5935ba4d7da2c103$var$parsePlacement(`${$5935ba4d7da2c103$var$FLIPPED_DIRECTION[placement]} ${crossPlacement}`);
        let flippedPosition = $5935ba4d7da2c103$var$computePosition(childOffset, boundaryDimensions, overlaySize, flippedPlacementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset);
        let flippedSpace = $5935ba4d7da2c103$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, flippedPlacementInfo);
        // If the available space for the flipped position is greater than the original available space, flip.
        if (flippedSpace > space) {
            placementInfo = flippedPlacementInfo;
            position = flippedPosition;
            normalizedOffset = offset;
        }
    }
    // Determine the direction the height of the overlay can grow so that we can choose how to calculate the max height
    let heightGrowthDirection = 'bottom';
    if (placementInfo.axis === 'top') {
        if (placementInfo.placement === 'top') heightGrowthDirection = 'top';
        else if (placementInfo.placement === 'bottom') heightGrowthDirection = 'bottom';
    } else if (placementInfo.crossAxis === 'top') {
        if (placementInfo.crossPlacement === 'top') heightGrowthDirection = 'bottom';
        else if (placementInfo.crossPlacement === 'bottom') heightGrowthDirection = 'top';
    }
    let delta = $5935ba4d7da2c103$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary);
    position[crossAxis] += delta;
    let maxHeight = $5935ba4d7da2c103$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, isContainerPositioned, margins, padding, overlaySize.height, heightGrowthDirection);
    if (userSetMaxHeight && userSetMaxHeight < maxHeight) maxHeight = userSetMaxHeight;
    overlaySize.height = Math.min(overlaySize.height, maxHeight);
    position = $5935ba4d7da2c103$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, normalizedOffset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset);
    delta = $5935ba4d7da2c103$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary);
    position[crossAxis] += delta;
    let arrowPosition = {};
    // All values are transformed so that 0 is at the top/left of the overlay depending on the orientation
    // Prefer the arrow being in the center of the trigger/overlay anchor element
    // childOffset[crossAxis] + .5 * childOffset[crossSize] = absolute position with respect to the trigger's coordinate system that would place the arrow in the center of the trigger
    // position[crossAxis] - margins[AXIS[crossAxis]] = value use to transform the position to a value with respect to the overlay's coordinate system. A child element's (aka arrow) position absolute's "0"
    // is positioned after the margin of its parent (aka overlay) so we need to subtract it to get the proper coordinate transform
    let preferredArrowPosition = childOffset[crossAxis] + .5 * childOffset[crossSize] - position[crossAxis] - margins[$5935ba4d7da2c103$var$AXIS[crossAxis]];
    // Min/Max position limits for the arrow with respect to the overlay
    const arrowMinPosition = arrowSize / 2 + arrowBoundaryOffset;
    var _margins_left, _margins_right, _margins_top, _margins_bottom;
    // overlaySize[crossSize] - margins = true size of the overlay
    const overlayMargin = $5935ba4d7da2c103$var$AXIS[crossAxis] === 'left' ? ((_margins_left = margins.left) !== null && _margins_left !== void 0 ? _margins_left : 0) + ((_margins_right = margins.right) !== null && _margins_right !== void 0 ? _margins_right : 0) : ((_margins_top = margins.top) !== null && _margins_top !== void 0 ? _margins_top : 0) + ((_margins_bottom = margins.bottom) !== null && _margins_bottom !== void 0 ? _margins_bottom : 0);
    const arrowMaxPosition = overlaySize[crossSize] - overlayMargin - arrowSize / 2 - arrowBoundaryOffset;
    // Min/Max position limits for the arrow with respect to the trigger/overlay anchor element
    // Same margin accomodation done here as well as for the preferredArrowPosition
    const arrowOverlappingChildMinEdge = childOffset[crossAxis] + arrowSize / 2 - (position[crossAxis] + margins[$5935ba4d7da2c103$var$AXIS[crossAxis]]);
    const arrowOverlappingChildMaxEdge = childOffset[crossAxis] + childOffset[crossSize] - arrowSize / 2 - (position[crossAxis] + margins[$5935ba4d7da2c103$var$AXIS[crossAxis]]);
    // Clamp the arrow positioning so that it always is within the bounds of the anchor and the overlay
    const arrowPositionOverlappingChild = (0, $6E71I$reactariautils.clamp)(preferredArrowPosition, arrowOverlappingChildMinEdge, arrowOverlappingChildMaxEdge);
    arrowPosition[crossAxis] = (0, $6E71I$reactariautils.clamp)(arrowPositionOverlappingChild, arrowMinPosition, arrowMaxPosition);
    return {
        position: position,
        maxHeight: maxHeight,
        arrowOffsetLeft: arrowPosition.left,
        arrowOffsetTop: arrowPosition.top,
        placement: placementInfo.placement
    };
}
function $5935ba4d7da2c103$export$b3ceb0cbf1056d98(opts) {
    let { placement: placement, targetNode: targetNode, overlayNode: overlayNode, scrollNode: scrollNode, padding: padding, shouldFlip: shouldFlip, boundaryElement: boundaryElement, offset: offset, crossOffset: crossOffset, maxHeight: maxHeight, arrowSize: arrowSize = 0, arrowBoundaryOffset: arrowBoundaryOffset = 0 } = opts;
    let container = overlayNode instanceof HTMLElement ? $5935ba4d7da2c103$var$getContainingBlock(overlayNode) : document.documentElement;
    let isViewportContainer = container === document.documentElement;
    const containerPositionStyle = window.getComputedStyle(container).position;
    let isContainerPositioned = !!containerPositionStyle && containerPositionStyle !== 'static';
    let childOffset = isViewportContainer ? $5935ba4d7da2c103$var$getOffset(targetNode) : $5935ba4d7da2c103$var$getPosition(targetNode, container);
    if (!isViewportContainer) {
        let { marginTop: marginTop, marginLeft: marginLeft } = window.getComputedStyle(targetNode);
        childOffset.top += parseInt(marginTop, 10) || 0;
        childOffset.left += parseInt(marginLeft, 10) || 0;
    }
    let overlaySize = $5935ba4d7da2c103$var$getOffset(overlayNode);
    let margins = $5935ba4d7da2c103$var$getMargins(overlayNode);
    var _margins_left, _margins_right;
    overlaySize.width += ((_margins_left = margins.left) !== null && _margins_left !== void 0 ? _margins_left : 0) + ((_margins_right = margins.right) !== null && _margins_right !== void 0 ? _margins_right : 0);
    var _margins_top, _margins_bottom;
    overlaySize.height += ((_margins_top = margins.top) !== null && _margins_top !== void 0 ? _margins_top : 0) + ((_margins_bottom = margins.bottom) !== null && _margins_bottom !== void 0 ? _margins_bottom : 0);
    let scrollSize = $5935ba4d7da2c103$var$getScroll(scrollNode);
    let boundaryDimensions = $5935ba4d7da2c103$var$getContainerDimensions(boundaryElement);
    let containerDimensions = $5935ba4d7da2c103$var$getContainerDimensions(container);
    // If the container is the HTML element wrapping the body element, the retrieved scrollTop/scrollLeft will be equal to the
    // body element's scroll. Set the container's scroll values to 0 since the overlay's edge position value in getDelta don't then need to be further offset
    // by the container scroll since they are essentially the same containing element and thus in the same coordinate system
    let containerOffsetWithBoundary = boundaryElement.tagName === 'BODY' ? $5935ba4d7da2c103$var$getOffset(container) : $5935ba4d7da2c103$var$getPosition(container, boundaryElement);
    if (container.tagName === 'HTML' && boundaryElement.tagName === 'BODY') {
        containerDimensions.scroll.top = 0;
        containerDimensions.scroll.left = 0;
    }
    return $5935ba4d7da2c103$export$6839422d1f33cee9(placement, childOffset, overlaySize, scrollSize, margins, padding, shouldFlip, boundaryDimensions, containerDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, maxHeight, arrowSize, arrowBoundaryOffset);
}
function $5935ba4d7da2c103$var$getOffset(node) {
    let { top: top, left: left, width: width, height: height } = node.getBoundingClientRect();
    let { scrollTop: scrollTop, scrollLeft: scrollLeft, clientTop: clientTop, clientLeft: clientLeft } = document.documentElement;
    return {
        top: top + scrollTop - clientTop,
        left: left + scrollLeft - clientLeft,
        width: width,
        height: height
    };
}
function $5935ba4d7da2c103$var$getPosition(node, parent) {
    let style = window.getComputedStyle(node);
    let offset;
    if (style.position === 'fixed') {
        let { top: top, left: left, width: width, height: height } = node.getBoundingClientRect();
        offset = {
            top: top,
            left: left,
            width: width,
            height: height
        };
    } else {
        offset = $5935ba4d7da2c103$var$getOffset(node);
        let parentOffset = $5935ba4d7da2c103$var$getOffset(parent);
        let parentStyle = window.getComputedStyle(parent);
        parentOffset.top += (parseInt(parentStyle.borderTopWidth, 10) || 0) - parent.scrollTop;
        parentOffset.left += (parseInt(parentStyle.borderLeftWidth, 10) || 0) - parent.scrollLeft;
        offset.top -= parentOffset.top;
        offset.left -= parentOffset.left;
    }
    offset.top -= parseInt(style.marginTop, 10) || 0;
    offset.left -= parseInt(style.marginLeft, 10) || 0;
    return offset;
}
// Returns the containing block of an element, which is the element that
// this element will be positioned relative to.
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block
function $5935ba4d7da2c103$var$getContainingBlock(node) {
    // The offsetParent of an element in most cases equals the containing block.
    // https://w3c.github.io/csswg-drafts/cssom-view/#dom-htmlelement-offsetparent
    let offsetParent = node.offsetParent;
    // The offsetParent algorithm terminates at the document body,
    // even if the body is not a containing block. Double check that
    // and use the documentElement if so.
    if (offsetParent && offsetParent === document.body && window.getComputedStyle(offsetParent).position === 'static' && !$5935ba4d7da2c103$var$isContainingBlock(offsetParent)) offsetParent = document.documentElement;
    // TODO(later): handle table elements?
    // The offsetParent can be null if the element has position: fixed, or a few other cases.
    // We have to walk up the tree manually in this case because fixed positioned elements
    // are still positioned relative to their containing block, which is not always the viewport.
    if (offsetParent == null) {
        offsetParent = node.parentElement;
        while(offsetParent && !$5935ba4d7da2c103$var$isContainingBlock(offsetParent))offsetParent = offsetParent.parentElement;
    }
    // Fall back to the viewport.
    return offsetParent || document.documentElement;
}
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
function $5935ba4d7da2c103$var$isContainingBlock(node) {
    let style = window.getComputedStyle(node);
    return style.transform !== 'none' || /transform|perspective/.test(style.willChange) || style.filter !== 'none' || style.contain === 'paint' || 'backdropFilter' in style && style.backdropFilter !== 'none' || 'WebkitBackdropFilter' in style && style.WebkitBackdropFilter !== 'none';
} //# sourceMappingURL=calculatePosition.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/useCloseOnScroll.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $f2vao$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "onCloseMap", ()=>$9a8aa1b0b336ea3a$export$f6211563215e3b37);
$parcel$export(module.exports, "useCloseOnScroll", ()=>$9a8aa1b0b336ea3a$export$18fc8428861184da);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $9a8aa1b0b336ea3a$export$f6211563215e3b37 = new WeakMap();
function $9a8aa1b0b336ea3a$export$18fc8428861184da(opts) {
    let { triggerRef: triggerRef, isOpen: isOpen, onClose: onClose } = opts;
    (0, $f2vao$react.useEffect)(()=>{
        if (!isOpen || onClose === null) return;
        let onScroll = (e)=>{
            // Ignore if scrolling an scrollable region outside the trigger's tree.
            let target = e.target;
            // window is not a Node and doesn't have contain, but window contains everything
            if (!triggerRef.current || target instanceof Node && !target.contains(triggerRef.current)) return;
            // Ignore scroll events on any input or textarea as the cursor position can cause it to scroll
            // such as in a combobox. Clicking the dropdown button places focus on the input, and if the
            // text inside the input extends beyond the 'end', then it will scroll so the cursor is visible at the end.
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
            let onCloseHandler = onClose || $9a8aa1b0b336ea3a$export$f6211563215e3b37.get(triggerRef.current);
            if (onCloseHandler) onCloseHandler();
        };
        window.addEventListener('scroll', onScroll, true);
        return ()=>{
            window.removeEventListener('scroll', onScroll, true);
        };
    }, [
        isOpen,
        onClose,
        triggerRef
    ]);
} //# sourceMappingURL=useCloseOnScroll.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/useOverlayPosition.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $5935ba4d7da2c103$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/calculatePosition.main.js [app-ssr] (ecmascript)");
var $9a8aa1b0b336ea3a$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/useCloseOnScroll.main.js [app-ssr] (ecmascript)");
var $6TXnl$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $6TXnl$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $6TXnl$reactariai18n = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useOverlayPosition", ()=>$cd94b4896dd97759$export$d39e1813b3bdd0e1);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ let $cd94b4896dd97759$var$visualViewport = typeof document !== 'undefined' ? window.visualViewport : null;
function $cd94b4896dd97759$export$d39e1813b3bdd0e1(props) {
    let { direction: direction } = (0, $6TXnl$reactariai18n.useLocale)();
    let { arrowSize: arrowSize = 0, targetRef: targetRef, overlayRef: overlayRef, scrollRef: scrollRef = overlayRef, placement: placement = 'bottom', containerPadding: containerPadding = 12, shouldFlip: shouldFlip = true, boundaryElement: boundaryElement = typeof document !== 'undefined' ? document.body : null, offset: offset = 0, crossOffset: crossOffset = 0, shouldUpdatePosition: shouldUpdatePosition = true, isOpen: isOpen = true, onClose: onClose, maxHeight: maxHeight, arrowBoundaryOffset: arrowBoundaryOffset = 0 } = props;
    let [position, setPosition] = (0, $6TXnl$react.useState)(null);
    let deps = [
        shouldUpdatePosition,
        placement,
        overlayRef.current,
        targetRef.current,
        scrollRef.current,
        containerPadding,
        shouldFlip,
        boundaryElement,
        offset,
        crossOffset,
        isOpen,
        direction,
        maxHeight,
        arrowBoundaryOffset,
        arrowSize
    ];
    // Note, the position freezing breaks if body sizes itself dynamicly with the visual viewport but that might
    // just be a non-realistic use case
    // Upon opening a overlay, record the current visual viewport scale so we can freeze the overlay styles
    let lastScale = (0, $6TXnl$react.useRef)($cd94b4896dd97759$var$visualViewport === null || $cd94b4896dd97759$var$visualViewport === void 0 ? void 0 : $cd94b4896dd97759$var$visualViewport.scale);
    (0, $6TXnl$react.useEffect)(()=>{
        if (isOpen) lastScale.current = $cd94b4896dd97759$var$visualViewport === null || $cd94b4896dd97759$var$visualViewport === void 0 ? void 0 : $cd94b4896dd97759$var$visualViewport.scale;
    }, [
        isOpen
    ]);
    let updatePosition = (0, $6TXnl$react.useCallback)(()=>{
        if (shouldUpdatePosition === false || !isOpen || !overlayRef.current || !targetRef.current || !boundaryElement) return;
        if (($cd94b4896dd97759$var$visualViewport === null || $cd94b4896dd97759$var$visualViewport === void 0 ? void 0 : $cd94b4896dd97759$var$visualViewport.scale) !== lastScale.current) return;
        // Determine a scroll anchor based on the focused element.
        // This stores the offset of the anchor element from the scroll container
        // so it can be restored after repositioning. This way if the overlay height
        // changes, the focused element appears to stay in the same position.
        let anchor = null;
        if (scrollRef.current && scrollRef.current.contains(document.activeElement)) {
            var _document_activeElement;
            let anchorRect = (_document_activeElement = document.activeElement) === null || _document_activeElement === void 0 ? void 0 : _document_activeElement.getBoundingClientRect();
            let scrollRect = scrollRef.current.getBoundingClientRect();
            var _anchorRect_top;
            // Anchor from the top if the offset is in the top half of the scrollable element,
            // otherwise anchor from the bottom.
            anchor = {
                type: 'top',
                offset: ((_anchorRect_top = anchorRect === null || anchorRect === void 0 ? void 0 : anchorRect.top) !== null && _anchorRect_top !== void 0 ? _anchorRect_top : 0) - scrollRect.top
            };
            if (anchor.offset > scrollRect.height / 2) {
                anchor.type = 'bottom';
                var _anchorRect_bottom;
                anchor.offset = ((_anchorRect_bottom = anchorRect === null || anchorRect === void 0 ? void 0 : anchorRect.bottom) !== null && _anchorRect_bottom !== void 0 ? _anchorRect_bottom : 0) - scrollRect.bottom;
            }
        }
        // Always reset the overlay's previous max height if not defined by the user so that we can compensate for
        // RAC collections populating after a second render and properly set a correct max height + positioning when it populates.
        let overlay = overlayRef.current;
        if (!maxHeight && overlayRef.current) {
            var _window_visualViewport;
            overlay.style.top = '0px';
            overlay.style.bottom = '';
            var _window_visualViewport_height;
            overlay.style.maxHeight = ((_window_visualViewport_height = (_window_visualViewport = window.visualViewport) === null || _window_visualViewport === void 0 ? void 0 : _window_visualViewport.height) !== null && _window_visualViewport_height !== void 0 ? _window_visualViewport_height : window.innerHeight) + 'px';
        }
        let position = (0, $5935ba4d7da2c103$exports.calculatePosition)({
            placement: $cd94b4896dd97759$var$translateRTL(placement, direction),
            overlayNode: overlayRef.current,
            targetNode: targetRef.current,
            scrollNode: scrollRef.current || overlayRef.current,
            padding: containerPadding,
            shouldFlip: shouldFlip,
            boundaryElement: boundaryElement,
            offset: offset,
            crossOffset: crossOffset,
            maxHeight: maxHeight,
            arrowSize: arrowSize,
            arrowBoundaryOffset: arrowBoundaryOffset
        });
        if (!position.position) return;
        // Modify overlay styles directly so positioning happens immediately without the need of a second render
        // This is so we don't have to delay autoFocus scrolling or delay applying preventScroll for popovers
        overlay.style.top = '';
        overlay.style.bottom = '';
        overlay.style.left = '';
        overlay.style.right = '';
        Object.keys(position.position).forEach((key)=>overlay.style[key] = position.position[key] + 'px');
        overlay.style.maxHeight = position.maxHeight != null ? position.maxHeight + 'px' : '';
        // Restore scroll position relative to anchor element.
        if (anchor && document.activeElement && scrollRef.current) {
            let anchorRect = document.activeElement.getBoundingClientRect();
            let scrollRect = scrollRef.current.getBoundingClientRect();
            let newOffset = anchorRect[anchor.type] - scrollRect[anchor.type];
            scrollRef.current.scrollTop += newOffset - anchor.offset;
        }
        // Trigger a set state for a second render anyway for arrow positioning
        setPosition(position);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
    // Update position when anything changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, $6TXnl$reactariautils.useLayoutEffect)(updatePosition, deps);
    // Update position on window resize
    $cd94b4896dd97759$var$useResize(updatePosition);
    // Update position when the overlay changes size (might need to flip).
    (0, $6TXnl$reactariautils.useResizeObserver)({
        ref: overlayRef,
        onResize: updatePosition
    });
    // Update position when the target changes size (might need to flip).
    (0, $6TXnl$reactariautils.useResizeObserver)({
        ref: targetRef,
        onResize: updatePosition
    });
    // Reposition the overlay and do not close on scroll while the visual viewport is resizing.
    // This will ensure that overlays adjust their positioning when the iOS virtual keyboard appears.
    let isResizing = (0, $6TXnl$react.useRef)(false);
    (0, $6TXnl$reactariautils.useLayoutEffect)(()=>{
        let timeout;
        let onResize = ()=>{
            isResizing.current = true;
            clearTimeout(timeout);
            timeout = setTimeout(()=>{
                isResizing.current = false;
            }, 500);
            updatePosition();
        };
        // Only reposition the overlay if a scroll event happens immediately as a result of resize (aka the virtual keyboard has appears)
        // We don't want to reposition the overlay if the user has pinch zoomed in and is scrolling the viewport around.
        let onScroll = ()=>{
            if (isResizing.current) onResize();
        };
        $cd94b4896dd97759$var$visualViewport === null || $cd94b4896dd97759$var$visualViewport === void 0 ? void 0 : $cd94b4896dd97759$var$visualViewport.addEventListener('resize', onResize);
        $cd94b4896dd97759$var$visualViewport === null || $cd94b4896dd97759$var$visualViewport === void 0 ? void 0 : $cd94b4896dd97759$var$visualViewport.addEventListener('scroll', onScroll);
        return ()=>{
            $cd94b4896dd97759$var$visualViewport === null || $cd94b4896dd97759$var$visualViewport === void 0 ? void 0 : $cd94b4896dd97759$var$visualViewport.removeEventListener('resize', onResize);
            $cd94b4896dd97759$var$visualViewport === null || $cd94b4896dd97759$var$visualViewport === void 0 ? void 0 : $cd94b4896dd97759$var$visualViewport.removeEventListener('scroll', onScroll);
        };
    }, [
        updatePosition
    ]);
    let close = (0, $6TXnl$react.useCallback)(()=>{
        if (!isResizing.current) onClose === null || onClose === void 0 ? void 0 : onClose();
    }, [
        onClose,
        isResizing
    ]);
    // When scrolling a parent scrollable region of the trigger (other than the body),
    // we hide the popover. Otherwise, its position would be incorrect.
    (0, $9a8aa1b0b336ea3a$exports.useCloseOnScroll)({
        triggerRef: targetRef,
        isOpen: isOpen,
        onClose: onClose && close
    });
    var _position_maxHeight, _position_placement;
    return {
        overlayProps: {
            style: {
                position: 'absolute',
                zIndex: 100000,
                ...position === null || position === void 0 ? void 0 : position.position,
                maxHeight: (_position_maxHeight = position === null || position === void 0 ? void 0 : position.maxHeight) !== null && _position_maxHeight !== void 0 ? _position_maxHeight : '100vh'
            }
        },
        placement: (_position_placement = position === null || position === void 0 ? void 0 : position.placement) !== null && _position_placement !== void 0 ? _position_placement : null,
        arrowProps: {
            'aria-hidden': 'true',
            role: 'presentation',
            style: {
                left: position === null || position === void 0 ? void 0 : position.arrowOffsetLeft,
                top: position === null || position === void 0 ? void 0 : position.arrowOffsetTop
            }
        },
        updatePosition: updatePosition
    };
}
function $cd94b4896dd97759$var$useResize(onResize) {
    (0, $6TXnl$reactariautils.useLayoutEffect)(()=>{
        window.addEventListener('resize', onResize, false);
        return ()=>{
            window.removeEventListener('resize', onResize, false);
        };
    }, [
        onResize
    ]);
}
function $cd94b4896dd97759$var$translateRTL(position, direction) {
    if (direction === 'rtl') return position.replace('start', 'right').replace('end', 'left');
    return position.replace('start', 'left').replace('end', 'right');
} //# sourceMappingURL=useOverlayPosition.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/useOverlay.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $eQbp7$reactariafocus = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-aria/focus/dist/main.js [app-ssr] (ecmascript)");
var $eQbp7$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $eQbp7$reactariainteractions = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-aria/interactions/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useOverlay", ()=>$82711f9cb668ecdb$export$ea8f71083e90600f);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $82711f9cb668ecdb$var$visibleOverlays = [];
function $82711f9cb668ecdb$export$ea8f71083e90600f(props, ref) {
    let { onClose: onClose, shouldCloseOnBlur: shouldCloseOnBlur, isOpen: isOpen, isDismissable: isDismissable = false, isKeyboardDismissDisabled: isKeyboardDismissDisabled = false, shouldCloseOnInteractOutside: shouldCloseOnInteractOutside } = props;
    // Add the overlay ref to the stack of visible overlays on mount, and remove on unmount.
    (0, $eQbp7$react.useEffect)(()=>{
        if (isOpen) $82711f9cb668ecdb$var$visibleOverlays.push(ref);
        return ()=>{
            let index = $82711f9cb668ecdb$var$visibleOverlays.indexOf(ref);
            if (index >= 0) $82711f9cb668ecdb$var$visibleOverlays.splice(index, 1);
        };
    }, [
        isOpen,
        ref
    ]);
    // Only hide the overlay when it is the topmost visible overlay in the stack
    let onHide = ()=>{
        if ($82711f9cb668ecdb$var$visibleOverlays[$82711f9cb668ecdb$var$visibleOverlays.length - 1] === ref && onClose) onClose();
    };
    let onInteractOutsideStart = (e)=>{
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
            if ($82711f9cb668ecdb$var$visibleOverlays[$82711f9cb668ecdb$var$visibleOverlays.length - 1] === ref) {
                e.stopPropagation();
                e.preventDefault();
            }
        }
    };
    let onInteractOutside = (e)=>{
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
            if ($82711f9cb668ecdb$var$visibleOverlays[$82711f9cb668ecdb$var$visibleOverlays.length - 1] === ref) {
                e.stopPropagation();
                e.preventDefault();
            }
            onHide();
        }
    };
    // Handle the escape key
    let onKeyDown = (e)=>{
        if (e.key === 'Escape' && !isKeyboardDismissDisabled && !e.nativeEvent.isComposing) {
            e.stopPropagation();
            e.preventDefault();
            onHide();
        }
    };
    // Handle clicking outside the overlay to close it
    (0, $eQbp7$reactariainteractions.useInteractOutside)({
        ref: ref,
        onInteractOutside: isDismissable && isOpen ? onInteractOutside : undefined,
        onInteractOutsideStart: onInteractOutsideStart
    });
    let { focusWithinProps: focusWithinProps } = (0, $eQbp7$reactariainteractions.useFocusWithin)({
        isDisabled: !shouldCloseOnBlur,
        onBlurWithin: (e)=>{
            // Do not close if relatedTarget is null, which means focus is lost to the body.
            // That can happen when switching tabs, or due to a VoiceOver/Chrome bug with Control+Option+Arrow navigation.
            // Clicking on the body to close the overlay should already be handled by useInteractOutside.
            // https://github.com/adobe/react-spectrum/issues/4130
            // https://github.com/adobe/react-spectrum/issues/4922
            //
            // If focus is moving into a child focus scope (e.g. menu inside a dialog),
            // do not close the outer overlay. At this point, the active scope should
            // still be the outer overlay, since blur events run before focus.
            if (!e.relatedTarget || (0, $eQbp7$reactariafocus.isElementInChildOfActiveScope)(e.relatedTarget)) return;
            if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.relatedTarget)) onClose === null || onClose === void 0 ? void 0 : onClose();
        }
    });
    let onPointerDownUnderlay = (e)=>{
        // fixes a firefox issue that starts text selection https://bugzilla.mozilla.org/show_bug.cgi?id=1675846
        if (e.target === e.currentTarget) e.preventDefault();
    };
    return {
        overlayProps: {
            onKeyDown: onKeyDown,
            ...focusWithinProps
        },
        underlayProps: {
            onPointerDown: onPointerDownUnderlay
        }
    };
} //# sourceMappingURL=useOverlay.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/useOverlayTrigger.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $9a8aa1b0b336ea3a$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/useCloseOnScroll.main.js [app-ssr] (ecmascript)");
var $3l9xr$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $3l9xr$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useOverlayTrigger", ()=>$b4878eb6316f670a$export$f9d5c8beee7d008d);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $b4878eb6316f670a$export$f9d5c8beee7d008d(props, state, ref) {
    let { type: type } = props;
    let { isOpen: isOpen } = state;
    // Backward compatibility. Share state close function with useOverlayPosition so it can close on scroll
    // without forcing users to pass onClose.
    (0, $3l9xr$react.useEffect)(()=>{
        if (ref && ref.current) (0, $9a8aa1b0b336ea3a$exports.onCloseMap).set(ref.current, state.close);
    });
    // Aria 1.1 supports multiple values for aria-haspopup other than just menus.
    // https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup
    // However, we only add it for menus for now because screen readers often
    // announce it as a menu even for other values.
    let ariaHasPopup = undefined;
    if (type === 'menu') ariaHasPopup = true;
    else if (type === 'listbox') ariaHasPopup = 'listbox';
    let overlayId = (0, $3l9xr$reactariautils.useId)();
    return {
        triggerProps: {
            'aria-haspopup': ariaHasPopup,
            'aria-expanded': isOpen,
            'aria-controls': isOpen ? overlayId : undefined,
            onPress: state.toggle
        },
        overlayProps: {
            id: overlayId
        }
    };
} //# sourceMappingURL=useOverlayTrigger.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/usePreventScroll.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $59kHH$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "usePreventScroll", ()=>$5c2f5cd01815d369$export$ee0f7cc6afcd1c18);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $5c2f5cd01815d369$var$visualViewport = typeof document !== 'undefined' && window.visualViewport;
// HTML input types that do not cause the software keyboard to appear.
const $5c2f5cd01815d369$var$nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
// The number of active usePreventScroll calls. Used to determine whether to revert back to the original page style/scroll position
let $5c2f5cd01815d369$var$preventScrollCount = 0;
let $5c2f5cd01815d369$var$restore;
function $5c2f5cd01815d369$export$ee0f7cc6afcd1c18(options = {}) {
    let { isDisabled: isDisabled } = options;
    (0, $59kHH$reactariautils.useLayoutEffect)(()=>{
        if (isDisabled) return;
        $5c2f5cd01815d369$var$preventScrollCount++;
        if ($5c2f5cd01815d369$var$preventScrollCount === 1) {
            if ((0, $59kHH$reactariautils.isIOS)()) $5c2f5cd01815d369$var$restore = $5c2f5cd01815d369$var$preventScrollMobileSafari();
            else $5c2f5cd01815d369$var$restore = $5c2f5cd01815d369$var$preventScrollStandard();
        }
        return ()=>{
            $5c2f5cd01815d369$var$preventScrollCount--;
            if ($5c2f5cd01815d369$var$preventScrollCount === 0) $5c2f5cd01815d369$var$restore();
        };
    }, [
        isDisabled
    ]);
}
// For most browsers, all we need to do is set `overflow: hidden` on the root element, and
// add some padding to prevent the page from shifting when the scrollbar is hidden.
function $5c2f5cd01815d369$var$preventScrollStandard() {
    return (0, $59kHH$reactariautils.chain)($5c2f5cd01815d369$var$setStyle(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`), $5c2f5cd01815d369$var$setStyle(document.documentElement, 'overflow', 'hidden'));
}
// Mobile Safari is a whole different beast. Even with overflow: hidden,
// it still scrolls the page in many situations:
//
// 1. When the bottom toolbar and address bar are collapsed, page scrolling is always allowed.
// 2. When the keyboard is visible, the viewport does not resize. Instead, the keyboard covers part of
//    it, so it becomes scrollable.
// 3. When tapping on an input, the page always scrolls so that the input is centered in the visual viewport.
//    This may cause even fixed position elements to scroll off the screen.
// 4. When using the next/previous buttons in the keyboard to navigate between inputs, the whole page always
//    scrolls, even if the input is inside a nested scrollable element that could be scrolled instead.
//
// In order to work around these cases, and prevent scrolling without jankiness, we do a few things:
//
// 1. Prevent default on `touchmove` events that are not in a scrollable element. This prevents touch scrolling
//    on the window.
// 2. Set `overscroll-behavior: contain` on nested scrollable regions so they do not scroll the page when at
//    the top or bottom. Work around a bug where this does not work when the element does not actually overflow
//    by preventing default in a `touchmove` event.
// 3. Prevent default on `touchend` events on input elements and handle focusing the element ourselves.
// 4. When focusing an input, apply a transform to trick Safari into thinking the input is at the top
//    of the page, which prevents it from scrolling the page. After the input is focused, scroll the element
//    into view ourselves, without scrolling the whole page.
// 5. Offset the body by the scroll position using a negative margin and scroll to the top. This should appear the
//    same visually, but makes the actual scroll position always zero. This is required to make all of the
//    above work or Safari will still try to scroll the page when focusing an input.
// 6. As a last resort, handle window scroll events, and scroll back to the top. This can happen when attempting
//    to navigate to an input with the next/previous buttons that's outside a modal.
function $5c2f5cd01815d369$var$preventScrollMobileSafari() {
    let scrollable;
    let restoreScrollableStyles;
    let onTouchStart = (e)=>{
        // Store the nearest scrollable parent element from the element that the user touched.
        scrollable = (0, $59kHH$reactariautils.getScrollParent)(e.target, true);
        if (scrollable === document.documentElement && scrollable === document.body) return;
        // Prevent scrolling up when at the top and scrolling down when at the bottom
        // of a nested scrollable area, otherwise mobile Safari will start scrolling
        // the window instead.
        if (scrollable instanceof HTMLElement && window.getComputedStyle(scrollable).overscrollBehavior === 'auto') restoreScrollableStyles = $5c2f5cd01815d369$var$setStyle(scrollable, 'overscrollBehavior', 'contain');
    };
    let onTouchMove = (e)=>{
        // Prevent scrolling the window.
        if (!scrollable || scrollable === document.documentElement || scrollable === document.body) {
            e.preventDefault();
            return;
        }
        // overscroll-behavior should prevent scroll chaining, but currently does not
        // if the element doesn't actually overflow. https://bugs.webkit.org/show_bug.cgi?id=243452
        // This checks that both the width and height do not overflow, otherwise we might
        // block horizontal scrolling too. In that case, adding `touch-action: pan-x` to
        // the element will prevent vertical page scrolling. We can't add that automatically
        // because it must be set before the touchstart event.
        if (scrollable.scrollHeight === scrollable.clientHeight && scrollable.scrollWidth === scrollable.clientWidth) e.preventDefault();
    };
    let onTouchEnd = (e)=>{
        let target = e.target;
        // Apply this change if we're not already focused on the target element
        if ($5c2f5cd01815d369$var$willOpenKeyboard(target) && target !== document.activeElement) {
            e.preventDefault();
            setupStyles();
            // Apply a transform to trick Safari into thinking the input is at the top of the page
            // so it doesn't try to scroll it into view. When tapping on an input, this needs to
            // be done before the "focus" event, so we have to focus the element ourselves.
            target.style.transform = 'translateY(-2000px)';
            target.focus();
            requestAnimationFrame(()=>{
                target.style.transform = '';
            });
        }
        if (restoreScrollableStyles) restoreScrollableStyles();
    };
    let onFocus = (e)=>{
        let target = e.target;
        if ($5c2f5cd01815d369$var$willOpenKeyboard(target)) {
            setupStyles();
            // Transform also needs to be applied in the focus event in cases where focus moves
            // other than tapping on an input directly, e.g. the next/previous buttons in the
            // software keyboard. In these cases, it seems applying the transform in the focus event
            // is good enough, whereas when tapping an input, it must be done before the focus event. 🤷‍♂️
            target.style.transform = 'translateY(-2000px)';
            requestAnimationFrame(()=>{
                target.style.transform = '';
                // This will have prevented the browser from scrolling the focused element into view,
                // so we need to do this ourselves in a way that doesn't cause the whole page to scroll.
                if ($5c2f5cd01815d369$var$visualViewport) {
                    if ($5c2f5cd01815d369$var$visualViewport.height < window.innerHeight) // to wait for the transform to be removed.
                    requestAnimationFrame(()=>{
                        $5c2f5cd01815d369$var$scrollIntoView(target);
                    });
                    else // measure the correct position to scroll to.
                    $5c2f5cd01815d369$var$visualViewport.addEventListener('resize', ()=>$5c2f5cd01815d369$var$scrollIntoView(target), {
                        once: true
                    });
                }
            });
        }
    };
    let restoreStyles = null;
    let setupStyles = ()=>{
        if (restoreStyles) return;
        let onWindowScroll = ()=>{
            // Last resort. If the window scrolled, scroll it back to the top.
            // It should always be at the top because the body will have a negative margin (see below).
            window.scrollTo(0, 0);
        };
        // Record the original scroll position so we can restore it.
        // Then apply a negative margin to the body to offset it by the scroll position. This will
        // enable us to scroll the window to the top, which is required for the rest of this to work.
        let scrollX = window.pageXOffset;
        let scrollY = window.pageYOffset;
        restoreStyles = (0, $59kHH$reactariautils.chain)($5c2f5cd01815d369$var$addEvent(window, 'scroll', onWindowScroll), $5c2f5cd01815d369$var$setStyle(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`), $5c2f5cd01815d369$var$setStyle(document.documentElement, 'overflow', 'hidden'), $5c2f5cd01815d369$var$setStyle(document.body, 'marginTop', `-${scrollY}px`), ()=>{
            window.scrollTo(scrollX, scrollY);
        });
        // Scroll to the top. The negative margin on the body will make this appear the same.
        window.scrollTo(0, 0);
    };
    let removeEvents = (0, $59kHH$reactariautils.chain)($5c2f5cd01815d369$var$addEvent(document, 'touchstart', onTouchStart, {
        passive: false,
        capture: true
    }), $5c2f5cd01815d369$var$addEvent(document, 'touchmove', onTouchMove, {
        passive: false,
        capture: true
    }), $5c2f5cd01815d369$var$addEvent(document, 'touchend', onTouchEnd, {
        passive: false,
        capture: true
    }), $5c2f5cd01815d369$var$addEvent(document, 'focus', onFocus, true));
    return ()=>{
        // Restore styles and scroll the page back to where it was.
        restoreScrollableStyles === null || restoreScrollableStyles === void 0 ? void 0 : restoreScrollableStyles();
        restoreStyles === null || restoreStyles === void 0 ? void 0 : restoreStyles();
        removeEvents();
    };
}
// Sets a CSS property on an element, and returns a function to revert it to the previous value.
function $5c2f5cd01815d369$var$setStyle(element, style, value) {
    let cur = element.style[style];
    element.style[style] = value;
    return ()=>{
        element.style[style] = cur;
    };
}
// Adds an event listener to an element, and returns a function to remove it.
function $5c2f5cd01815d369$var$addEvent(target, event, handler, options) {
    // internal function, so it's ok to ignore the difficult to fix type error
    // @ts-ignore
    target.addEventListener(event, handler, options);
    return ()=>{
        // @ts-ignore
        target.removeEventListener(event, handler, options);
    };
}
function $5c2f5cd01815d369$var$scrollIntoView(target) {
    let root = document.scrollingElement || document.documentElement;
    let nextTarget = target;
    while(nextTarget && nextTarget !== root){
        // Find the parent scrollable element and adjust the scroll position if the target is not already in view.
        let scrollable = (0, $59kHH$reactariautils.getScrollParent)(nextTarget);
        if (scrollable !== document.documentElement && scrollable !== document.body && scrollable !== nextTarget) {
            let scrollableTop = scrollable.getBoundingClientRect().top;
            let targetTop = nextTarget.getBoundingClientRect().top;
            if (targetTop > scrollableTop + nextTarget.clientHeight) scrollable.scrollTop += targetTop - scrollableTop;
        }
        nextTarget = scrollable.parentElement;
    }
}
function $5c2f5cd01815d369$var$willOpenKeyboard(target) {
    return target instanceof HTMLInputElement && !$5c2f5cd01815d369$var$nonTextInputTypes.has(target.type) || target instanceof HTMLTextAreaElement || target instanceof HTMLElement && target.isContentEditable;
} //# sourceMappingURL=usePreventScroll.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/useModal.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $btuAB$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $btuAB$reactdom = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var $btuAB$reactariassr = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-aria/ssr/dist/main.js [app-ssr] (ecmascript)");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "ModalProvider", ()=>$0775ea8ea6a0565e$export$178405afcd8c5eb);
$parcel$export(module.exports, "useModalProvider", ()=>$0775ea8ea6a0565e$export$d9aaed4c3ece1bc0);
$parcel$export(module.exports, "OverlayProvider", ()=>$0775ea8ea6a0565e$export$bf688221f59024e5);
$parcel$export(module.exports, "OverlayContainer", ()=>$0775ea8ea6a0565e$export$b47c3594eab58386);
$parcel$export(module.exports, "useModal", ()=>$0775ea8ea6a0565e$export$33ffd74ebf07f060);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $0775ea8ea6a0565e$var$Context = /*#__PURE__*/ (0, $parcel$interopDefault($btuAB$react)).createContext(null);
function $0775ea8ea6a0565e$export$178405afcd8c5eb(props) {
    let { children: children } = props;
    let parent = (0, $btuAB$react.useContext)($0775ea8ea6a0565e$var$Context);
    let [modalCount, setModalCount] = (0, $btuAB$react.useState)(0);
    let context = (0, $btuAB$react.useMemo)(()=>({
            parent: parent,
            modalCount: modalCount,
            addModal () {
                setModalCount((count)=>count + 1);
                if (parent) parent.addModal();
            },
            removeModal () {
                setModalCount((count)=>count - 1);
                if (parent) parent.removeModal();
            }
        }), [
        parent,
        modalCount
    ]);
    return /*#__PURE__*/ (0, $parcel$interopDefault($btuAB$react)).createElement($0775ea8ea6a0565e$var$Context.Provider, {
        value: context
    }, children);
}
function $0775ea8ea6a0565e$export$d9aaed4c3ece1bc0() {
    let context = (0, $btuAB$react.useContext)($0775ea8ea6a0565e$var$Context);
    return {
        modalProviderProps: {
            'aria-hidden': context && context.modalCount > 0 ? true : undefined
        }
    };
}
/**
 * Creates a root node that will be aria-hidden if there are other modals open.
 */ function $0775ea8ea6a0565e$var$OverlayContainerDOM(props) {
    let { modalProviderProps: modalProviderProps } = $0775ea8ea6a0565e$export$d9aaed4c3ece1bc0();
    return /*#__PURE__*/ (0, $parcel$interopDefault($btuAB$react)).createElement("div", {
        "data-overlay-container": true,
        ...props,
        ...modalProviderProps
    });
}
function $0775ea8ea6a0565e$export$bf688221f59024e5(props) {
    return /*#__PURE__*/ (0, $parcel$interopDefault($btuAB$react)).createElement($0775ea8ea6a0565e$export$178405afcd8c5eb, null, /*#__PURE__*/ (0, $parcel$interopDefault($btuAB$react)).createElement($0775ea8ea6a0565e$var$OverlayContainerDOM, props));
}
function $0775ea8ea6a0565e$export$b47c3594eab58386(props) {
    let isSSR = (0, $btuAB$reactariassr.useIsSSR)();
    let { portalContainer: portalContainer = isSSR ? null : document.body, ...rest } = props;
    (0, $parcel$interopDefault($btuAB$react)).useEffect(()=>{
        if (portalContainer === null || portalContainer === void 0 ? void 0 : portalContainer.closest('[data-overlay-container]')) throw new Error('An OverlayContainer must not be inside another container. Please change the portalContainer prop.');
    }, [
        portalContainer
    ]);
    if (!portalContainer) return null;
    let contents = /*#__PURE__*/ (0, $parcel$interopDefault($btuAB$react)).createElement($0775ea8ea6a0565e$export$bf688221f59024e5, rest);
    return /*#__PURE__*/ (0, $parcel$interopDefault($btuAB$reactdom)).createPortal(contents, portalContainer);
}
function $0775ea8ea6a0565e$export$33ffd74ebf07f060(options) {
    // Add aria-hidden to all parent providers on mount, and restore on unmount.
    let context = (0, $btuAB$react.useContext)($0775ea8ea6a0565e$var$Context);
    if (!context) throw new Error('Modal is not contained within a provider');
    (0, $btuAB$react.useEffect)(()=>{
        if ((options === null || options === void 0 ? void 0 : options.isDisabled) || !context || !context.parent) return;
        // The immediate context is from the provider containing this modal, so we only
        // want to trigger aria-hidden on its parents not on the modal provider itself.
        context.parent.addModal();
        return ()=>{
            if (context && context.parent) context.parent.removeModal();
        };
    }, [
        context,
        context.parent,
        options === null || options === void 0 ? void 0 : options.isDisabled
    ]);
    return {
        modalProps: {
            'data-ismodal': !(options === null || options === void 0 ? void 0 : options.isDisabled)
        }
    };
} //# sourceMappingURL=useModal.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/ar-AE.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `\u{62A}\u{62C}\u{627}\u{647}\u{644}`
}; //# sourceMappingURL=ar-AE.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/bg-BG.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `\u{41E}\u{442}\u{445}\u{432}\u{44A}\u{440}\u{43B}\u{44F}\u{43D}\u{435}`
}; //# sourceMappingURL=bg-BG.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/cs-CZ.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `Odstranit`
}; //# sourceMappingURL=cs-CZ.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/da-DK.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `Luk`
}; //# sourceMappingURL=da-DK.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/de-DE.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `Schlie\xdfen`
}; //# sourceMappingURL=de-DE.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/el-GR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `\u{391}\u{3C0}\u{3CC}\u{3C1}\u{3C1}\u{3B9}\u{3C8}\u{3B7}`
}; //# sourceMappingURL=el-GR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/en-US.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `Dismiss`
}; //# sourceMappingURL=en-US.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/es-ES.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `Descartar`
}; //# sourceMappingURL=es-ES.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/et-EE.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `L\xf5peta`
}; //# sourceMappingURL=et-EE.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/fi-FI.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `Hylk\xe4\xe4`
}; //# sourceMappingURL=fi-FI.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/fr-FR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `Rejeter`
}; //# sourceMappingURL=fr-FR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/he-IL.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `\u{5D4}\u{5EA}\u{5E2}\u{5DC}\u{5DD}`
}; //# sourceMappingURL=he-IL.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/hr-HR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `Odbaci`
}; //# sourceMappingURL=hr-HR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/hu-HU.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `Elutas\xedt\xe1s`
}; //# sourceMappingURL=hu-HU.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/it-IT.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `Ignora`
}; //# sourceMappingURL=it-IT.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/ja-JP.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `\u{9589}\u{3058}\u{308B}`
}; //# sourceMappingURL=ja-JP.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/ko-KR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `\u{BB34}\u{C2DC}`
}; //# sourceMappingURL=ko-KR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/lt-LT.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `Atmesti`
}; //# sourceMappingURL=lt-LT.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/lv-LV.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `Ner\u{101}d\u{12B}t`
}; //# sourceMappingURL=lv-LV.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/nb-NO.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `Lukk`
}; //# sourceMappingURL=nb-NO.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/nl-NL.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `Negeren`
}; //# sourceMappingURL=nl-NL.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/pl-PL.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `Zignoruj`
}; //# sourceMappingURL=pl-PL.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/pt-BR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `Descartar`
}; //# sourceMappingURL=pt-BR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/pt-PT.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `Dispensar`
}; //# sourceMappingURL=pt-PT.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/ro-RO.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `Revocare`
}; //# sourceMappingURL=ro-RO.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/ru-RU.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `\u{41F}\u{440}\u{43E}\u{43F}\u{443}\u{441}\u{442}\u{438}\u{442}\u{44C}`
}; //# sourceMappingURL=ru-RU.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/sk-SK.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `Zru\u{161}i\u{165}`
}; //# sourceMappingURL=sk-SK.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/sl-SI.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `Opusti`
}; //# sourceMappingURL=sl-SI.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/sr-SP.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `Odbaci`
}; //# sourceMappingURL=sr-SP.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/sv-SE.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `Avvisa`
}; //# sourceMappingURL=sv-SE.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/tr-TR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `Kapat`
}; //# sourceMappingURL=tr-TR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/uk-UA.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `\u{421}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438}`
}; //# sourceMappingURL=uk-UA.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/zh-CN.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `\u{53D6}\u{6D88}`
}; //# sourceMappingURL=zh-CN.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/zh-TW.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dismiss": `\u{95DC}\u{9589}`
}; //# sourceMappingURL=zh-TW.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/intlStrings.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $4393d9b86d3ad278$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/ar-AE.main.js [app-ssr] (ecmascript)");
var $254224013ae06959$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/bg-BG.main.js [app-ssr] (ecmascript)");
var $55d3567b59d09782$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/cs-CZ.main.js [app-ssr] (ecmascript)");
var $0e419a7be7773c16$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/da-DK.main.js [app-ssr] (ecmascript)");
var $be606513c8356c34$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/de-DE.main.js [app-ssr] (ecmascript)");
var $7d99787e5bd26f87$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/el-GR.main.js [app-ssr] (ecmascript)");
var $0360f2a6534752c1$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/en-US.main.js [app-ssr] (ecmascript)");
var $92bf4fdecfeb6a61$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/es-ES.main.js [app-ssr] (ecmascript)");
var $7c02fa9b9c598043$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/et-EE.main.js [app-ssr] (ecmascript)");
var $ba53535dcca59343$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/fi-FI.main.js [app-ssr] (ecmascript)");
var $2fbbcddf7d252cb7$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/fr-FR.main.js [app-ssr] (ecmascript)");
var $0a1f0520e07d3596$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/he-IL.main.js [app-ssr] (ecmascript)");
var $f7be5df1487823a9$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/hr-HR.main.js [app-ssr] (ecmascript)");
var $8dbe4363bfbba3f9$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/hu-HU.main.js [app-ssr] (ecmascript)");
var $90a445da1ad273e7$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/it-IT.main.js [app-ssr] (ecmascript)");
var $e1ebf18259c9b1ee$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/ja-JP.main.js [app-ssr] (ecmascript)");
var $765893642f3b4f72$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/ko-KR.main.js [app-ssr] (ecmascript)");
var $af73ba24f63febd1$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/lt-LT.main.js [app-ssr] (ecmascript)");
var $97aac9f6740ee412$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/lv-LV.main.js [app-ssr] (ecmascript)");
var $92fbe76e196d7e0a$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/nb-NO.main.js [app-ssr] (ecmascript)");
var $44399897afb701ce$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/nl-NL.main.js [app-ssr] (ecmascript)");
var $d679e258664d7384$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/pl-PL.main.js [app-ssr] (ecmascript)");
var $b51fc2992648966b$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/pt-BR.main.js [app-ssr] (ecmascript)");
var $6abbc540dcd5f78c$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/pt-PT.main.js [app-ssr] (ecmascript)");
var $6cbc0c9bf574473b$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/ro-RO.main.js [app-ssr] (ecmascript)");
var $009edbe58be6525b$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/ru-RU.main.js [app-ssr] (ecmascript)");
var $01cf6095489e78f7$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/sk-SK.main.js [app-ssr] (ecmascript)");
var $33fd5a1a3753e83f$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/sl-SI.main.js [app-ssr] (ecmascript)");
var $6b9373a558e74e84$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/sr-SP.main.js [app-ssr] (ecmascript)");
var $90008194c3db7fce$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/sv-SE.main.js [app-ssr] (ecmascript)");
var $e29d21290b4ce15c$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/tr-TR.main.js [app-ssr] (ecmascript)");
var $96139c59e8ba3f85$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/uk-UA.main.js [app-ssr] (ecmascript)");
var $052554192ea8e826$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/zh-CN.main.js [app-ssr] (ecmascript)");
var $3f3b5d798a5abdbc$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/zh-TW.main.js [app-ssr] (ecmascript)");
module.exports = {
    "ar-AE": $4393d9b86d3ad278$exports,
    "bg-BG": $254224013ae06959$exports,
    "cs-CZ": $55d3567b59d09782$exports,
    "da-DK": $0e419a7be7773c16$exports,
    "de-DE": $be606513c8356c34$exports,
    "el-GR": $7d99787e5bd26f87$exports,
    "en-US": $0360f2a6534752c1$exports,
    "es-ES": $92bf4fdecfeb6a61$exports,
    "et-EE": $7c02fa9b9c598043$exports,
    "fi-FI": $ba53535dcca59343$exports,
    "fr-FR": $2fbbcddf7d252cb7$exports,
    "he-IL": $0a1f0520e07d3596$exports,
    "hr-HR": $f7be5df1487823a9$exports,
    "hu-HU": $8dbe4363bfbba3f9$exports,
    "it-IT": $90a445da1ad273e7$exports,
    "ja-JP": $e1ebf18259c9b1ee$exports,
    "ko-KR": $765893642f3b4f72$exports,
    "lt-LT": $af73ba24f63febd1$exports,
    "lv-LV": $97aac9f6740ee412$exports,
    "nb-NO": $92fbe76e196d7e0a$exports,
    "nl-NL": $44399897afb701ce$exports,
    "pl-PL": $d679e258664d7384$exports,
    "pt-BR": $b51fc2992648966b$exports,
    "pt-PT": $6abbc540dcd5f78c$exports,
    "ro-RO": $6cbc0c9bf574473b$exports,
    "ru-RU": $009edbe58be6525b$exports,
    "sk-SK": $01cf6095489e78f7$exports,
    "sl-SI": $33fd5a1a3753e83f$exports,
    "sr-SP": $6b9373a558e74e84$exports,
    "sv-SE": $90008194c3db7fce$exports,
    "tr-TR": $e29d21290b4ce15c$exports,
    "uk-UA": $96139c59e8ba3f85$exports,
    "zh-CN": $052554192ea8e826$exports,
    "zh-TW": $3f3b5d798a5abdbc$exports
}; //# sourceMappingURL=intlStrings.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/DismissButton.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $90f032faf016e1fb$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/intlStrings.main.js [app-ssr] (ecmascript)");
var $21EvL$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $21EvL$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $21EvL$reactariai18n = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/main.js [app-ssr] (ecmascript)");
var $21EvL$reactariavisuallyhidden = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-aria/visually-hidden/dist/main.js [app-ssr] (ecmascript)");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "DismissButton", ()=>$f69bb3e6457495cc$export$2317d149ed6f78c4);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $f69bb3e6457495cc$export$2317d149ed6f78c4(props) {
    let { onDismiss: onDismiss, ...otherProps } = props;
    let stringFormatter = (0, $21EvL$reactariai18n.useLocalizedStringFormatter)((0, $parcel$interopDefault($90f032faf016e1fb$exports)), '@react-aria/overlays');
    let labels = (0, $21EvL$reactariautils.useLabels)(otherProps, stringFormatter.format('dismiss'));
    let onClick = ()=>{
        if (onDismiss) onDismiss();
    };
    return /*#__PURE__*/ (0, $parcel$interopDefault($21EvL$react)).createElement((0, $21EvL$reactariavisuallyhidden.VisuallyHidden), null, /*#__PURE__*/ (0, $parcel$interopDefault($21EvL$react)).createElement("button", {
        ...labels,
        tabIndex: -1,
        onClick: onClick,
        style: {
            width: 1,
            height: 1
        }
    }));
} //# sourceMappingURL=DismissButton.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/ariaHideOutside.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "ariaHideOutside", ()=>$08ef1685902b6011$export$1c3ebcada18427bf);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Keeps a ref count of all hidden elements. Added to when hiding an element, and
// subtracted from when showing it again. When it reaches zero, aria-hidden is removed.
let $08ef1685902b6011$var$refCountMap = new WeakMap();
let $08ef1685902b6011$var$observerStack = [];
function $08ef1685902b6011$export$1c3ebcada18427bf(targets, root = document.body) {
    let visibleNodes = new Set(targets);
    let hiddenNodes = new Set();
    let walk = (root)=>{
        // Keep live announcer and top layer elements (e.g. toasts) visible.
        for (let element of root.querySelectorAll('[data-live-announcer], [data-react-aria-top-layer]'))visibleNodes.add(element);
        let acceptNode = (node)=>{
            // Skip this node and its children if it is one of the target nodes, or a live announcer.
            // Also skip children of already hidden nodes, as aria-hidden is recursive. An exception is
            // made for elements with role="row" since VoiceOver on iOS has issues hiding elements with role="row".
            // For that case we want to hide the cells inside as well (https://bugs.webkit.org/show_bug.cgi?id=222623).
            if (visibleNodes.has(node) || node.parentElement && hiddenNodes.has(node.parentElement) && node.parentElement.getAttribute('role') !== 'row') return NodeFilter.FILTER_REJECT;
            // Skip this node but continue to children if one of the targets is inside the node.
            for (let target of visibleNodes){
                if (node.contains(target)) return NodeFilter.FILTER_SKIP;
            }
            return NodeFilter.FILTER_ACCEPT;
        };
        let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
            acceptNode: acceptNode
        });
        // TreeWalker does not include the root.
        let acceptRoot = acceptNode(root);
        if (acceptRoot === NodeFilter.FILTER_ACCEPT) hide(root);
        if (acceptRoot !== NodeFilter.FILTER_REJECT) {
            let node = walker.nextNode();
            while(node != null){
                hide(node);
                node = walker.nextNode();
            }
        }
    };
    let hide = (node)=>{
        var _refCountMap_get;
        let refCount = (_refCountMap_get = $08ef1685902b6011$var$refCountMap.get(node)) !== null && _refCountMap_get !== void 0 ? _refCountMap_get : 0;
        // If already aria-hidden, and the ref count is zero, then this element
        // was already hidden and there's nothing for us to do.
        if (node.getAttribute('aria-hidden') === 'true' && refCount === 0) return;
        if (refCount === 0) node.setAttribute('aria-hidden', 'true');
        hiddenNodes.add(node);
        $08ef1685902b6011$var$refCountMap.set(node, refCount + 1);
    };
    // If there is already a MutationObserver listening from a previous call,
    // disconnect it so the new on takes over.
    if ($08ef1685902b6011$var$observerStack.length) $08ef1685902b6011$var$observerStack[$08ef1685902b6011$var$observerStack.length - 1].disconnect();
    walk(root);
    let observer = new MutationObserver((changes)=>{
        for (let change of changes){
            if (change.type !== 'childList' || change.addedNodes.length === 0) continue;
            // If the parent element of the added nodes is not within one of the targets,
            // and not already inside a hidden node, hide all of the new children.
            if (![
                ...visibleNodes,
                ...hiddenNodes
            ].some((node)=>node.contains(change.target))) {
                for (let node of change.removedNodes)if (node instanceof Element) {
                    visibleNodes.delete(node);
                    hiddenNodes.delete(node);
                }
                for (let node of change.addedNodes){
                    if ((node instanceof HTMLElement || node instanceof SVGElement) && (node.dataset.liveAnnouncer === 'true' || node.dataset.reactAriaTopLayer === 'true')) visibleNodes.add(node);
                    else if (node instanceof Element) walk(node);
                }
            }
        }
    });
    observer.observe(root, {
        childList: true,
        subtree: true
    });
    let observerWrapper = {
        observe () {
            observer.observe(root, {
                childList: true,
                subtree: true
            });
        },
        disconnect () {
            observer.disconnect();
        }
    };
    $08ef1685902b6011$var$observerStack.push(observerWrapper);
    return ()=>{
        observer.disconnect();
        for (let node of hiddenNodes){
            let count = $08ef1685902b6011$var$refCountMap.get(node);
            if (count == null) continue;
            if (count === 1) {
                node.removeAttribute('aria-hidden');
                $08ef1685902b6011$var$refCountMap.delete(node);
            } else $08ef1685902b6011$var$refCountMap.set(node, count - 1);
        }
        // Remove this observer from the stack, and start the previous one.
        if (observerWrapper === $08ef1685902b6011$var$observerStack[$08ef1685902b6011$var$observerStack.length - 1]) {
            $08ef1685902b6011$var$observerStack.pop();
            if ($08ef1685902b6011$var$observerStack.length) $08ef1685902b6011$var$observerStack[$08ef1685902b6011$var$observerStack.length - 1].observe();
        } else $08ef1685902b6011$var$observerStack.splice($08ef1685902b6011$var$observerStack.indexOf(observerWrapper), 1);
    };
} //# sourceMappingURL=ariaHideOutside.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/usePopover.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $08ef1685902b6011$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/ariaHideOutside.main.js [app-ssr] (ecmascript)");
var $cd94b4896dd97759$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/useOverlayPosition.main.js [app-ssr] (ecmascript)");
var $82711f9cb668ecdb$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/useOverlay.main.js [app-ssr] (ecmascript)");
var $5c2f5cd01815d369$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/usePreventScroll.main.js [app-ssr] (ecmascript)");
var $jkVOI$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "usePopover", ()=>$6c2dfcdee3e15e20$export$542a6fd13ac93354);
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $6c2dfcdee3e15e20$export$542a6fd13ac93354(props, state) {
    let { triggerRef: triggerRef, popoverRef: popoverRef, isNonModal: isNonModal, isKeyboardDismissDisabled: isKeyboardDismissDisabled, shouldCloseOnInteractOutside: shouldCloseOnInteractOutside, ...otherProps } = props;
    let { overlayProps: overlayProps, underlayProps: underlayProps } = (0, $82711f9cb668ecdb$exports.useOverlay)({
        // If popover is in the top layer, it should not prevent other popovers from being dismissed.
        isOpen: state.isOpen && !otherProps['data-react-aria-top-layer'],
        onClose: state.close,
        shouldCloseOnBlur: true,
        isDismissable: !isNonModal,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled,
        shouldCloseOnInteractOutside: shouldCloseOnInteractOutside
    }, popoverRef);
    let { overlayProps: positionProps, arrowProps: arrowProps, placement: placement } = (0, $cd94b4896dd97759$exports.useOverlayPosition)({
        ...otherProps,
        targetRef: triggerRef,
        overlayRef: popoverRef,
        isOpen: state.isOpen,
        onClose: isNonModal ? state.close : undefined
    });
    (0, $5c2f5cd01815d369$exports.usePreventScroll)({
        isDisabled: isNonModal || !state.isOpen
    });
    (0, $jkVOI$reactariautils.useLayoutEffect)(()=>{
        if (state.isOpen && !isNonModal && popoverRef.current) return (0, $08ef1685902b6011$exports.ariaHideOutside)([
            popoverRef.current
        ]);
    }, [
        isNonModal,
        state.isOpen,
        popoverRef
    ]);
    return {
        popoverProps: (0, $jkVOI$reactariautils.mergeProps)(overlayProps, positionProps),
        arrowProps: arrowProps,
        underlayProps: underlayProps,
        placement: placement
    };
} //# sourceMappingURL=usePopover.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/PortalProvider.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $b2rU6$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "UNSTABLE_PortalProvider", ()=>$d7347c25ab757295$export$db995ea7163b4b67);
$parcel$export(module.exports, "useUNSTABLE_PortalContext", ()=>$d7347c25ab757295$export$574e9b0fb070c3b0);
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $d7347c25ab757295$export$60d741e20e0aa309 = /*#__PURE__*/ (0, $b2rU6$react.createContext)({});
function $d7347c25ab757295$export$db995ea7163b4b67(props) {
    let { getContainer: getContainer } = props;
    let { getContainer: ctxGetContainer } = $d7347c25ab757295$export$574e9b0fb070c3b0();
    return /*#__PURE__*/ (0, $parcel$interopDefault($b2rU6$react)).createElement($d7347c25ab757295$export$60d741e20e0aa309.Provider, {
        value: {
            getContainer: getContainer === null ? undefined : getContainer !== null && getContainer !== void 0 ? getContainer : ctxGetContainer
        }
    }, props.children);
}
function $d7347c25ab757295$export$574e9b0fb070c3b0() {
    var _useContext;
    return (_useContext = (0, $b2rU6$react.useContext)($d7347c25ab757295$export$60d741e20e0aa309)) !== null && _useContext !== void 0 ? _useContext : {};
} //# sourceMappingURL=PortalProvider.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/Overlay.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $d7347c25ab757295$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/PortalProvider.main.js [app-ssr] (ecmascript)");
var $kxJqT$reactariainteractions = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-aria/interactions/dist/main.js [app-ssr] (ecmascript)");
var $kxJqT$reactariafocus = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-aria/focus/dist/main.js [app-ssr] (ecmascript)");
var $kxJqT$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $kxJqT$reactdom = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var $kxJqT$reactariassr = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-aria/ssr/dist/main.js [app-ssr] (ecmascript)");
var $kxJqT$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "Overlay", ()=>$745edbb83ab4296f$export$c6fdb837b070b4ff);
$parcel$export(module.exports, "useOverlayFocusContain", ()=>$745edbb83ab4296f$export$14c98a7594375490);
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $745edbb83ab4296f$export$a2200b96afd16271 = /*#__PURE__*/ (0, $parcel$interopDefault($kxJqT$react)).createContext(null);
function $745edbb83ab4296f$export$c6fdb837b070b4ff(props) {
    let isSSR = (0, $kxJqT$reactariassr.useIsSSR)();
    let { portalContainer: portalContainer = isSSR ? null : document.body, isExiting: isExiting } = props;
    let [contain, setContain] = (0, $kxJqT$react.useState)(false);
    let contextValue = (0, $kxJqT$react.useMemo)(()=>({
            contain: contain,
            setContain: setContain
        }), [
        contain,
        setContain
    ]);
    let { getContainer: getContainer } = (0, $d7347c25ab757295$exports.useUNSTABLE_PortalContext)();
    if (!props.portalContainer && getContainer) portalContainer = getContainer();
    if (!portalContainer) return null;
    let contents = props.children;
    if (!props.disableFocusManagement) contents = /*#__PURE__*/ (0, $parcel$interopDefault($kxJqT$react)).createElement((0, $kxJqT$reactariafocus.FocusScope), {
        restoreFocus: true,
        contain: contain && !isExiting
    }, contents);
    contents = /*#__PURE__*/ (0, $parcel$interopDefault($kxJqT$react)).createElement($745edbb83ab4296f$export$a2200b96afd16271.Provider, {
        value: contextValue
    }, /*#__PURE__*/ (0, $parcel$interopDefault($kxJqT$react)).createElement((0, $kxJqT$reactariainteractions.ClearPressResponder), null, contents));
    return /*#__PURE__*/ (0, $parcel$interopDefault($kxJqT$reactdom)).createPortal(contents, portalContainer);
}
function $745edbb83ab4296f$export$14c98a7594375490() {
    let ctx = (0, $kxJqT$react.useContext)($745edbb83ab4296f$export$a2200b96afd16271);
    let setContain = ctx === null || ctx === void 0 ? void 0 : ctx.setContain;
    (0, $kxJqT$reactariautils.useLayoutEffect)(()=>{
        setContain === null || setContain === void 0 ? void 0 : setContain(true);
    }, [
        setContain
    ]);
} //# sourceMappingURL=Overlay.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/useModalOverlay.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $08ef1685902b6011$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/ariaHideOutside.main.js [app-ssr] (ecmascript)");
var $82711f9cb668ecdb$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/useOverlay.main.js [app-ssr] (ecmascript)");
var $745edbb83ab4296f$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/Overlay.main.js [app-ssr] (ecmascript)");
var $5c2f5cd01815d369$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/usePreventScroll.main.js [app-ssr] (ecmascript)");
var $9ziDi$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $9ziDi$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useModalOverlay", ()=>$11b7e0b04b421e95$export$dbc0f175b25fb0fb);
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $11b7e0b04b421e95$export$dbc0f175b25fb0fb(props, state, ref) {
    let { overlayProps: overlayProps, underlayProps: underlayProps } = (0, $82711f9cb668ecdb$exports.useOverlay)({
        ...props,
        isOpen: state.isOpen,
        onClose: state.close
    }, ref);
    (0, $5c2f5cd01815d369$exports.usePreventScroll)({
        isDisabled: !state.isOpen
    });
    (0, $745edbb83ab4296f$exports.useOverlayFocusContain)();
    (0, $9ziDi$react.useEffect)(()=>{
        if (state.isOpen && ref.current) return (0, $08ef1685902b6011$exports.ariaHideOutside)([
            ref.current
        ]);
    }, [
        state.isOpen,
        ref
    ]);
    return {
        modalProps: (0, $9ziDi$reactariautils.mergeProps)(overlayProps),
        underlayProps: underlayProps
    };
} //# sourceMappingURL=useModalOverlay.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $cd94b4896dd97759$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/useOverlayPosition.main.js [app-ssr] (ecmascript)");
var $82711f9cb668ecdb$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/useOverlay.main.js [app-ssr] (ecmascript)");
var $b4878eb6316f670a$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/useOverlayTrigger.main.js [app-ssr] (ecmascript)");
var $5c2f5cd01815d369$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/usePreventScroll.main.js [app-ssr] (ecmascript)");
var $0775ea8ea6a0565e$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/useModal.main.js [app-ssr] (ecmascript)");
var $f69bb3e6457495cc$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/DismissButton.main.js [app-ssr] (ecmascript)");
var $08ef1685902b6011$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/ariaHideOutside.main.js [app-ssr] (ecmascript)");
var $6c2dfcdee3e15e20$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/usePopover.main.js [app-ssr] (ecmascript)");
var $11b7e0b04b421e95$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/useModalOverlay.main.js [app-ssr] (ecmascript)");
var $745edbb83ab4296f$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/Overlay.main.js [app-ssr] (ecmascript)");
var $d7347c25ab757295$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/PortalProvider.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useOverlayPosition", ()=>$cd94b4896dd97759$exports.useOverlayPosition);
$parcel$export(module.exports, "useOverlay", ()=>$82711f9cb668ecdb$exports.useOverlay);
$parcel$export(module.exports, "useOverlayTrigger", ()=>$b4878eb6316f670a$exports.useOverlayTrigger);
$parcel$export(module.exports, "usePreventScroll", ()=>$5c2f5cd01815d369$exports.usePreventScroll);
$parcel$export(module.exports, "ModalProvider", ()=>$0775ea8ea6a0565e$exports.ModalProvider);
$parcel$export(module.exports, "useModalProvider", ()=>$0775ea8ea6a0565e$exports.useModalProvider);
$parcel$export(module.exports, "OverlayProvider", ()=>$0775ea8ea6a0565e$exports.OverlayProvider);
$parcel$export(module.exports, "OverlayContainer", ()=>$0775ea8ea6a0565e$exports.OverlayContainer);
$parcel$export(module.exports, "useModal", ()=>$0775ea8ea6a0565e$exports.useModal);
$parcel$export(module.exports, "DismissButton", ()=>$f69bb3e6457495cc$exports.DismissButton);
$parcel$export(module.exports, "ariaHideOutside", ()=>$08ef1685902b6011$exports.ariaHideOutside);
$parcel$export(module.exports, "usePopover", ()=>$6c2dfcdee3e15e20$exports.usePopover);
$parcel$export(module.exports, "useModalOverlay", ()=>$11b7e0b04b421e95$exports.useModalOverlay);
$parcel$export(module.exports, "Overlay", ()=>$745edbb83ab4296f$exports.Overlay);
$parcel$export(module.exports, "useOverlayFocusContain", ()=>$745edbb83ab4296f$exports.useOverlayFocusContain);
$parcel$export(module.exports, "UNSTABLE_PortalProvider", ()=>$d7347c25ab757295$exports.UNSTABLE_PortalProvider);
$parcel$export(module.exports, "useUNSTABLE_PortalContext", ()=>$d7347c25ab757295$exports.useUNSTABLE_PortalContext); /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */  //# sourceMappingURL=main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/utils.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "isRTL", ()=>$4d65847630a056a8$export$702d680b21cbd764);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // https://en.wikipedia.org/wiki/Right-to-left
const $4d65847630a056a8$var$RTL_SCRIPTS = new Set([
    'Arab',
    'Syrc',
    'Samr',
    'Mand',
    'Thaa',
    'Mend',
    'Nkoo',
    'Adlm',
    'Rohg',
    'Hebr'
]);
const $4d65847630a056a8$var$RTL_LANGS = new Set([
    'ae',
    'ar',
    'arc',
    'bcc',
    'bqi',
    'ckb',
    'dv',
    'fa',
    'glk',
    'he',
    'ku',
    'mzn',
    'nqo',
    'pnb',
    'ps',
    'sd',
    'ug',
    'ur',
    'yi'
]);
function $4d65847630a056a8$export$702d680b21cbd764(localeString) {
    // If the Intl.Locale API is available, use it to get the locale's text direction.
    if (Intl.Locale) {
        let locale = new Intl.Locale(localeString).maximize();
        // Use the text info object to get the direction if possible.
        // @ts-ignore - this was implemented as a property by some browsers before it was standardized as a function.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTextInfo
        let textInfo = typeof locale.getTextInfo === 'function' ? locale.getTextInfo() : locale.textInfo;
        if (textInfo) return textInfo.direction === 'rtl';
        // Fallback: guess using the script.
        // This is more accurate than guessing by language, since languages can be written in multiple scripts.
        if (locale.script) return $4d65847630a056a8$var$RTL_SCRIPTS.has(locale.script);
    }
    // If not, just guess by the language (first part of the locale)
    let lang = localeString.split('-')[0];
    return $4d65847630a056a8$var$RTL_LANGS.has(lang);
} //# sourceMappingURL=utils.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/useDefaultLocale.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $4d65847630a056a8$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/utils.main.js [app-ssr] (ecmascript)");
var $5Ie0C$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $5Ie0C$reactariassr = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/node_modules/@react-aria/ssr/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useDefaultLocale", ()=>$2919bdec75484e64$export$188ec29ebc2bdc3a);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Locale passed from server by PackageLocalizationProvider.
const $2919bdec75484e64$var$localeSymbol = Symbol.for('react-aria.i18n.locale');
function $2919bdec75484e64$export$f09106e7c6677ec5() {
    let locale = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window[$2919bdec75484e64$var$localeSymbol] || typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage) || 'en-US';
    try {
        Intl.DateTimeFormat.supportedLocalesOf([
            locale
        ]);
    } catch  {
        locale = 'en-US';
    }
    return {
        locale: locale,
        direction: (0, $4d65847630a056a8$exports.isRTL)(locale) ? 'rtl' : 'ltr'
    };
}
let $2919bdec75484e64$var$currentLocale = $2919bdec75484e64$export$f09106e7c6677ec5();
let $2919bdec75484e64$var$listeners = new Set();
function $2919bdec75484e64$var$updateLocale() {
    $2919bdec75484e64$var$currentLocale = $2919bdec75484e64$export$f09106e7c6677ec5();
    for (let listener of $2919bdec75484e64$var$listeners)listener($2919bdec75484e64$var$currentLocale);
}
function $2919bdec75484e64$export$188ec29ebc2bdc3a() {
    let isSSR = (0, $5Ie0C$reactariassr.useIsSSR)();
    let [defaultLocale, setDefaultLocale] = (0, $5Ie0C$react.useState)($2919bdec75484e64$var$currentLocale);
    (0, $5Ie0C$react.useEffect)(()=>{
        if ($2919bdec75484e64$var$listeners.size === 0) window.addEventListener('languagechange', $2919bdec75484e64$var$updateLocale);
        $2919bdec75484e64$var$listeners.add(setDefaultLocale);
        return ()=>{
            $2919bdec75484e64$var$listeners.delete(setDefaultLocale);
            if ($2919bdec75484e64$var$listeners.size === 0) window.removeEventListener('languagechange', $2919bdec75484e64$var$updateLocale);
        };
    }, []);
    // We cannot determine the browser's language on the server, so default to
    // en-US. This will be updated after hydration on the client to the correct value.
    if (isSSR) return {
        locale: 'en-US',
        direction: 'ltr'
    };
    return defaultLocale;
} //# sourceMappingURL=useDefaultLocale.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/context.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $4d65847630a056a8$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/utils.main.js [app-ssr] (ecmascript)");
var $2919bdec75484e64$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/useDefaultLocale.main.js [app-ssr] (ecmascript)");
var $e7RNT$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "I18nProvider", ()=>$47fa5ec5ff482271$export$a54013f0d02a8f82);
$parcel$export(module.exports, "useLocale", ()=>$47fa5ec5ff482271$export$43bb16f9c6d9e3f7);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $47fa5ec5ff482271$var$I18nContext = /*#__PURE__*/ (0, $parcel$interopDefault($e7RNT$react)).createContext(null);
function $47fa5ec5ff482271$export$a54013f0d02a8f82(props) {
    let { locale: locale, children: children } = props;
    let defaultLocale = (0, $2919bdec75484e64$exports.useDefaultLocale)();
    let value = (0, $parcel$interopDefault($e7RNT$react)).useMemo(()=>{
        if (!locale) return defaultLocale;
        return {
            locale: locale,
            direction: (0, $4d65847630a056a8$exports.isRTL)(locale) ? 'rtl' : 'ltr'
        };
    }, [
        defaultLocale,
        locale
    ]);
    return /*#__PURE__*/ (0, $parcel$interopDefault($e7RNT$react)).createElement($47fa5ec5ff482271$var$I18nContext.Provider, {
        value: value
    }, children);
}
function $47fa5ec5ff482271$export$43bb16f9c6d9e3f7() {
    let defaultLocale = (0, $2919bdec75484e64$exports.useDefaultLocale)();
    let context = (0, $e7RNT$react.useContext)($47fa5ec5ff482271$var$I18nContext);
    return context || defaultLocale;
} //# sourceMappingURL=context.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/useMessageFormatter.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $47fa5ec5ff482271$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/context.main.js [app-ssr] (ecmascript)");
var $8WbGG$internationalizedmessage = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/message/dist/main.js [app-ssr] (ecmascript)");
var $8WbGG$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useMessageFormatter", ()=>$c376aa482226bf60$export$ec23bf898b1eed85);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $c376aa482226bf60$var$cache = new WeakMap();
function $c376aa482226bf60$var$getCachedDictionary(strings) {
    let dictionary = $c376aa482226bf60$var$cache.get(strings);
    if (!dictionary) {
        dictionary = new (0, $8WbGG$internationalizedmessage.MessageDictionary)(strings);
        $c376aa482226bf60$var$cache.set(strings, dictionary);
    }
    return dictionary;
}
function $c376aa482226bf60$export$ec23bf898b1eed85(strings) {
    let { locale: locale } = (0, $47fa5ec5ff482271$exports.useLocale)();
    let dictionary = (0, $8WbGG$react.useMemo)(()=>$c376aa482226bf60$var$getCachedDictionary(strings), [
        strings
    ]);
    let formatter = (0, $8WbGG$react.useMemo)(()=>new (0, $8WbGG$internationalizedmessage.MessageFormatter)(locale, dictionary), [
        locale,
        dictionary
    ]);
    return (0, $8WbGG$react.useCallback)((key, variables)=>formatter.format(key, variables), [
        formatter
    ]);
} //# sourceMappingURL=useMessageFormatter.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/useLocalizedStringFormatter.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $47fa5ec5ff482271$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/context.main.js [app-ssr] (ecmascript)");
var $fbyBw$internationalizedstring = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/string/dist/main.js [app-ssr] (ecmascript)");
var $fbyBw$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useLocalizedStringDictionary", ()=>$fc53663969a3d00a$export$87b761675e8eaa10);
$parcel$export(module.exports, "useLocalizedStringFormatter", ()=>$fc53663969a3d00a$export$f12b703ca79dfbb1);
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $fc53663969a3d00a$var$cache = new WeakMap();
function $fc53663969a3d00a$var$getCachedDictionary(strings) {
    let dictionary = $fc53663969a3d00a$var$cache.get(strings);
    if (!dictionary) {
        dictionary = new (0, $fbyBw$internationalizedstring.LocalizedStringDictionary)(strings);
        $fc53663969a3d00a$var$cache.set(strings, dictionary);
    }
    return dictionary;
}
function $fc53663969a3d00a$export$87b761675e8eaa10(strings, packageName) {
    return packageName && (0, $fbyBw$internationalizedstring.LocalizedStringDictionary).getGlobalDictionaryForPackage(packageName) || $fc53663969a3d00a$var$getCachedDictionary(strings);
}
function $fc53663969a3d00a$export$f12b703ca79dfbb1(strings, packageName) {
    let { locale: locale } = (0, $47fa5ec5ff482271$exports.useLocale)();
    let dictionary = $fc53663969a3d00a$export$87b761675e8eaa10(strings, packageName);
    return (0, $fbyBw$react.useMemo)(()=>new (0, $fbyBw$internationalizedstring.LocalizedStringFormatter)(locale, dictionary), [
        locale,
        dictionary
    ]);
} //# sourceMappingURL=useLocalizedStringFormatter.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/useListFormatter.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $47fa5ec5ff482271$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/context.main.js [app-ssr] (ecmascript)");
var $3UK6J$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useListFormatter", ()=>$cb6a3e7d490e97a4$export$a2f47a3d2973640);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $cb6a3e7d490e97a4$export$a2f47a3d2973640(options = {}) {
    let { locale: locale } = (0, $47fa5ec5ff482271$exports.useLocale)();
    return (0, $3UK6J$react.useMemo)(()=>new Intl.ListFormat(locale, options), [
        locale,
        options
    ]);
} //# sourceMappingURL=useListFormatter.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/useDateFormatter.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $47fa5ec5ff482271$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/context.main.js [app-ssr] (ecmascript)");
var $9DCmA$internationalizeddate = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/date/dist/main.js [app-ssr] (ecmascript)");
var $9DCmA$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $9DCmA$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useDateFormatter", ()=>$b80c530ff2e20243$export$85fd5fdf27bacc79);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $b80c530ff2e20243$export$85fd5fdf27bacc79(options) {
    // Reuse last options object if it is shallowly equal, which allows the useMemo result to also be reused.
    options = (0, $9DCmA$reactariautils.useDeepMemo)(options !== null && options !== void 0 ? options : {}, $b80c530ff2e20243$var$isEqual);
    let { locale: locale } = (0, $47fa5ec5ff482271$exports.useLocale)();
    return (0, $9DCmA$react.useMemo)(()=>new (0, $9DCmA$internationalizeddate.DateFormatter)(locale, options), [
        locale,
        options
    ]);
}
function $b80c530ff2e20243$var$isEqual(a, b) {
    if (a === b) return true;
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    for (let key of aKeys){
        if (b[key] !== a[key]) return false;
    }
    return true;
} //# sourceMappingURL=useDateFormatter.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/useNumberFormatter.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $47fa5ec5ff482271$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/context.main.js [app-ssr] (ecmascript)");
var $1NItU$internationalizednumber = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/number/dist/main.js [app-ssr] (ecmascript)");
var $1NItU$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useNumberFormatter", ()=>$fea93c5b7c90d9f4$export$b7a616150fdb9f44);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $fea93c5b7c90d9f4$export$b7a616150fdb9f44(options = {}) {
    let { locale: locale } = (0, $47fa5ec5ff482271$exports.useLocale)();
    return (0, $1NItU$react.useMemo)(()=>new (0, $1NItU$internationalizednumber.NumberFormatter)(locale, options), [
        locale,
        options
    ]);
} //# sourceMappingURL=useNumberFormatter.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/useCollator.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $47fa5ec5ff482271$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/context.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useCollator", ()=>$27a5ce66022270ad$export$a16aca283550c30d);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ let $27a5ce66022270ad$var$cache = new Map();
function $27a5ce66022270ad$export$a16aca283550c30d(options) {
    let { locale: locale } = (0, $47fa5ec5ff482271$exports.useLocale)();
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if ($27a5ce66022270ad$var$cache.has(cacheKey)) return $27a5ce66022270ad$var$cache.get(cacheKey);
    let formatter = new Intl.Collator(locale, options);
    $27a5ce66022270ad$var$cache.set(cacheKey, formatter);
    return formatter;
} //# sourceMappingURL=useCollator.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/useFilter.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $27a5ce66022270ad$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/useCollator.main.js [app-ssr] (ecmascript)");
var $c0oFg$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useFilter", ()=>$832d079b867c7223$export$3274cf84b703fff);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $832d079b867c7223$export$3274cf84b703fff(options) {
    let collator = (0, $27a5ce66022270ad$exports.useCollator)({
        usage: 'search',
        ...options
    });
    // TODO(later): these methods don't currently support the ignorePunctuation option.
    let startsWith = (0, $c0oFg$react.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        // Normalize both strings so we can slice safely
        // TODO: take into account the ignorePunctuation option as well...
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        return collator.compare(string.slice(0, substring.length), substring) === 0;
    }, [
        collator
    ]);
    let endsWith = (0, $c0oFg$react.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        return collator.compare(string.slice(-substring.length), substring) === 0;
    }, [
        collator
    ]);
    let contains = (0, $c0oFg$react.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        let scan = 0;
        let sliceLen = substring.length;
        for(; scan + sliceLen <= string.length; scan++){
            let slice = string.slice(scan, scan + sliceLen);
            if (collator.compare(substring, slice) === 0) return true;
        }
        return false;
    }, [
        collator
    ]);
    return (0, $c0oFg$react.useMemo)(()=>({
            startsWith: startsWith,
            endsWith: endsWith,
            contains: contains
        }), [
        startsWith,
        endsWith,
        contains
    ]);
} //# sourceMappingURL=useFilter.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $47fa5ec5ff482271$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/context.main.js [app-ssr] (ecmascript)");
var $c376aa482226bf60$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/useMessageFormatter.main.js [app-ssr] (ecmascript)");
var $fc53663969a3d00a$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/useLocalizedStringFormatter.main.js [app-ssr] (ecmascript)");
var $cb6a3e7d490e97a4$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/useListFormatter.main.js [app-ssr] (ecmascript)");
var $b80c530ff2e20243$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/useDateFormatter.main.js [app-ssr] (ecmascript)");
var $fea93c5b7c90d9f4$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/useNumberFormatter.main.js [app-ssr] (ecmascript)");
var $27a5ce66022270ad$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/useCollator.main.js [app-ssr] (ecmascript)");
var $832d079b867c7223$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/useFilter.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "I18nProvider", ()=>$47fa5ec5ff482271$exports.I18nProvider);
$parcel$export(module.exports, "useLocale", ()=>$47fa5ec5ff482271$exports.useLocale);
$parcel$export(module.exports, "useMessageFormatter", ()=>$c376aa482226bf60$exports.useMessageFormatter);
$parcel$export(module.exports, "useLocalizedStringFormatter", ()=>$fc53663969a3d00a$exports.useLocalizedStringFormatter);
$parcel$export(module.exports, "useLocalizedStringDictionary", ()=>$fc53663969a3d00a$exports.useLocalizedStringDictionary);
$parcel$export(module.exports, "useListFormatter", ()=>$cb6a3e7d490e97a4$exports.useListFormatter);
$parcel$export(module.exports, "useDateFormatter", ()=>$b80c530ff2e20243$exports.useDateFormatter);
$parcel$export(module.exports, "useNumberFormatter", ()=>$fea93c5b7c90d9f4$exports.useNumberFormatter);
$parcel$export(module.exports, "useCollator", ()=>$27a5ce66022270ad$exports.useCollator);
$parcel$export(module.exports, "useFilter", ()=>$832d079b867c7223$exports.useFilter); /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */  //# sourceMappingURL=main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/utils.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "isRTL", ()=>$4d65847630a056a8$export$702d680b21cbd764);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // https://en.wikipedia.org/wiki/Right-to-left
const $4d65847630a056a8$var$RTL_SCRIPTS = new Set([
    'Arab',
    'Syrc',
    'Samr',
    'Mand',
    'Thaa',
    'Mend',
    'Nkoo',
    'Adlm',
    'Rohg',
    'Hebr'
]);
const $4d65847630a056a8$var$RTL_LANGS = new Set([
    'ae',
    'ar',
    'arc',
    'bcc',
    'bqi',
    'ckb',
    'dv',
    'fa',
    'glk',
    'he',
    'ku',
    'mzn',
    'nqo',
    'pnb',
    'ps',
    'sd',
    'ug',
    'ur',
    'yi'
]);
function $4d65847630a056a8$export$702d680b21cbd764(localeString) {
    // If the Intl.Locale API is available, use it to get the locale's text direction.
    if (Intl.Locale) {
        let locale = new Intl.Locale(localeString).maximize();
        // Use the text info object to get the direction if possible.
        // @ts-ignore - this was implemented as a property by some browsers before it was standardized as a function.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTextInfo
        let textInfo = typeof locale.getTextInfo === 'function' ? locale.getTextInfo() : locale.textInfo;
        if (textInfo) return textInfo.direction === 'rtl';
        // Fallback: guess using the script.
        // This is more accurate than guessing by language, since languages can be written in multiple scripts.
        if (locale.script) return $4d65847630a056a8$var$RTL_SCRIPTS.has(locale.script);
    }
    // If not, just guess by the language (first part of the locale)
    let lang = localeString.split('-')[0];
    return $4d65847630a056a8$var$RTL_LANGS.has(lang);
} //# sourceMappingURL=utils.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/useDefaultLocale.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $4d65847630a056a8$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/utils.main.js [app-ssr] (ecmascript)");
var $5Ie0C$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $5Ie0C$reactariassr = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/ssr/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useDefaultLocale", ()=>$2919bdec75484e64$export$188ec29ebc2bdc3a);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Locale passed from server by PackageLocalizationProvider.
const $2919bdec75484e64$var$localeSymbol = Symbol.for('react-aria.i18n.locale');
function $2919bdec75484e64$export$f09106e7c6677ec5() {
    let locale = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window[$2919bdec75484e64$var$localeSymbol] || typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage) || 'en-US';
    try {
        Intl.DateTimeFormat.supportedLocalesOf([
            locale
        ]);
    } catch  {
        locale = 'en-US';
    }
    return {
        locale: locale,
        direction: (0, $4d65847630a056a8$exports.isRTL)(locale) ? 'rtl' : 'ltr'
    };
}
let $2919bdec75484e64$var$currentLocale = $2919bdec75484e64$export$f09106e7c6677ec5();
let $2919bdec75484e64$var$listeners = new Set();
function $2919bdec75484e64$var$updateLocale() {
    $2919bdec75484e64$var$currentLocale = $2919bdec75484e64$export$f09106e7c6677ec5();
    for (let listener of $2919bdec75484e64$var$listeners)listener($2919bdec75484e64$var$currentLocale);
}
function $2919bdec75484e64$export$188ec29ebc2bdc3a() {
    let isSSR = (0, $5Ie0C$reactariassr.useIsSSR)();
    let [defaultLocale, setDefaultLocale] = (0, $5Ie0C$react.useState)($2919bdec75484e64$var$currentLocale);
    (0, $5Ie0C$react.useEffect)(()=>{
        if ($2919bdec75484e64$var$listeners.size === 0) window.addEventListener('languagechange', $2919bdec75484e64$var$updateLocale);
        $2919bdec75484e64$var$listeners.add(setDefaultLocale);
        return ()=>{
            $2919bdec75484e64$var$listeners.delete(setDefaultLocale);
            if ($2919bdec75484e64$var$listeners.size === 0) window.removeEventListener('languagechange', $2919bdec75484e64$var$updateLocale);
        };
    }, []);
    // We cannot determine the browser's language on the server, so default to
    // en-US. This will be updated after hydration on the client to the correct value.
    if (isSSR) return {
        locale: 'en-US',
        direction: 'ltr'
    };
    return defaultLocale;
} //# sourceMappingURL=useDefaultLocale.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/context.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $4d65847630a056a8$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/utils.main.js [app-ssr] (ecmascript)");
var $2919bdec75484e64$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/useDefaultLocale.main.js [app-ssr] (ecmascript)");
var $e7RNT$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "I18nProvider", ()=>$47fa5ec5ff482271$export$a54013f0d02a8f82);
$parcel$export(module.exports, "useLocale", ()=>$47fa5ec5ff482271$export$43bb16f9c6d9e3f7);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $47fa5ec5ff482271$var$I18nContext = /*#__PURE__*/ (0, $parcel$interopDefault($e7RNT$react)).createContext(null);
/**
 * Internal component that handles the case when locale is provided.
 */ function $47fa5ec5ff482271$var$I18nProviderWithLocale(props) {
    let { locale: locale, children: children } = props;
    let value = (0, $parcel$interopDefault($e7RNT$react)).useMemo(()=>({
            locale: locale,
            direction: (0, $4d65847630a056a8$exports.isRTL)(locale) ? 'rtl' : 'ltr'
        }), [
        locale
    ]);
    return /*#__PURE__*/ (0, $parcel$interopDefault($e7RNT$react)).createElement($47fa5ec5ff482271$var$I18nContext.Provider, {
        value: value
    }, children);
}
/**
 * Internal component that handles the case when no locale is provided.
 */ function $47fa5ec5ff482271$var$I18nProviderWithDefaultLocale(props) {
    let { children: children } = props;
    let defaultLocale = (0, $2919bdec75484e64$exports.useDefaultLocale)();
    return /*#__PURE__*/ (0, $parcel$interopDefault($e7RNT$react)).createElement($47fa5ec5ff482271$var$I18nContext.Provider, {
        value: defaultLocale
    }, children);
}
function $47fa5ec5ff482271$export$a54013f0d02a8f82(props) {
    let { locale: locale, children: children } = props;
    // Conditionally render different components to avoid calling useDefaultLocale.
    // This is necessary because useDefaultLocale triggers a re-render.
    if (locale) return /*#__PURE__*/ (0, $parcel$interopDefault($e7RNT$react)).createElement($47fa5ec5ff482271$var$I18nProviderWithLocale, {
        locale: locale,
        children: children
    });
    return /*#__PURE__*/ (0, $parcel$interopDefault($e7RNT$react)).createElement($47fa5ec5ff482271$var$I18nProviderWithDefaultLocale, {
        children: children
    });
}
function $47fa5ec5ff482271$export$43bb16f9c6d9e3f7() {
    let defaultLocale = (0, $2919bdec75484e64$exports.useDefaultLocale)();
    let context = (0, $e7RNT$react.useContext)($47fa5ec5ff482271$var$I18nContext);
    return context || defaultLocale;
} //# sourceMappingURL=context.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/useMessageFormatter.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $47fa5ec5ff482271$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/context.main.js [app-ssr] (ecmascript)");
var $8WbGG$internationalizedmessage = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/message/dist/main.js [app-ssr] (ecmascript)");
var $8WbGG$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useMessageFormatter", ()=>$c376aa482226bf60$export$ec23bf898b1eed85);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $c376aa482226bf60$var$cache = new WeakMap();
function $c376aa482226bf60$var$getCachedDictionary(strings) {
    let dictionary = $c376aa482226bf60$var$cache.get(strings);
    if (!dictionary) {
        dictionary = new (0, $8WbGG$internationalizedmessage.MessageDictionary)(strings);
        $c376aa482226bf60$var$cache.set(strings, dictionary);
    }
    return dictionary;
}
function $c376aa482226bf60$export$ec23bf898b1eed85(strings) {
    let { locale: locale } = (0, $47fa5ec5ff482271$exports.useLocale)();
    let dictionary = (0, $8WbGG$react.useMemo)(()=>$c376aa482226bf60$var$getCachedDictionary(strings), [
        strings
    ]);
    let formatter = (0, $8WbGG$react.useMemo)(()=>new (0, $8WbGG$internationalizedmessage.MessageFormatter)(locale, dictionary), [
        locale,
        dictionary
    ]);
    return (0, $8WbGG$react.useCallback)((key, variables)=>formatter.format(key, variables), [
        formatter
    ]);
} //# sourceMappingURL=useMessageFormatter.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/useLocalizedStringFormatter.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $47fa5ec5ff482271$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/context.main.js [app-ssr] (ecmascript)");
var $fbyBw$internationalizedstring = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/string/dist/main.js [app-ssr] (ecmascript)");
var $fbyBw$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useLocalizedStringDictionary", ()=>$fc53663969a3d00a$export$87b761675e8eaa10);
$parcel$export(module.exports, "useLocalizedStringFormatter", ()=>$fc53663969a3d00a$export$f12b703ca79dfbb1);
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $fc53663969a3d00a$var$cache = new WeakMap();
function $fc53663969a3d00a$var$getCachedDictionary(strings) {
    let dictionary = $fc53663969a3d00a$var$cache.get(strings);
    if (!dictionary) {
        dictionary = new (0, $fbyBw$internationalizedstring.LocalizedStringDictionary)(strings);
        $fc53663969a3d00a$var$cache.set(strings, dictionary);
    }
    return dictionary;
}
function $fc53663969a3d00a$export$87b761675e8eaa10(strings, packageName) {
    return packageName && (0, $fbyBw$internationalizedstring.LocalizedStringDictionary).getGlobalDictionaryForPackage(packageName) || $fc53663969a3d00a$var$getCachedDictionary(strings);
}
function $fc53663969a3d00a$export$f12b703ca79dfbb1(strings, packageName) {
    let { locale: locale } = (0, $47fa5ec5ff482271$exports.useLocale)();
    let dictionary = $fc53663969a3d00a$export$87b761675e8eaa10(strings, packageName);
    return (0, $fbyBw$react.useMemo)(()=>new (0, $fbyBw$internationalizedstring.LocalizedStringFormatter)(locale, dictionary), [
        locale,
        dictionary
    ]);
} //# sourceMappingURL=useLocalizedStringFormatter.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/useListFormatter.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $47fa5ec5ff482271$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/context.main.js [app-ssr] (ecmascript)");
var $3UK6J$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useListFormatter", ()=>$cb6a3e7d490e97a4$export$a2f47a3d2973640);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $cb6a3e7d490e97a4$export$a2f47a3d2973640(options = {}) {
    let { locale: locale } = (0, $47fa5ec5ff482271$exports.useLocale)();
    return (0, $3UK6J$react.useMemo)(()=>new Intl.ListFormat(locale, options), [
        locale,
        options
    ]);
} //# sourceMappingURL=useListFormatter.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/useDateFormatter.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $47fa5ec5ff482271$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/context.main.js [app-ssr] (ecmascript)");
var $9DCmA$internationalizeddate = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/date/dist/main.js [app-ssr] (ecmascript)");
var $9DCmA$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $9DCmA$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useDateFormatter", ()=>$b80c530ff2e20243$export$85fd5fdf27bacc79);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $b80c530ff2e20243$export$85fd5fdf27bacc79(options) {
    // Reuse last options object if it is shallowly equal, which allows the useMemo result to also be reused.
    options = (0, $9DCmA$reactariautils.useDeepMemo)(options !== null && options !== void 0 ? options : {}, $b80c530ff2e20243$var$isEqual);
    let { locale: locale } = (0, $47fa5ec5ff482271$exports.useLocale)();
    return (0, $9DCmA$react.useMemo)(()=>new (0, $9DCmA$internationalizeddate.DateFormatter)(locale, options), [
        locale,
        options
    ]);
}
function $b80c530ff2e20243$var$isEqual(a, b) {
    if (a === b) return true;
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    for (let key of aKeys){
        if (b[key] !== a[key]) return false;
    }
    return true;
} //# sourceMappingURL=useDateFormatter.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/useNumberFormatter.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $47fa5ec5ff482271$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/context.main.js [app-ssr] (ecmascript)");
var $1NItU$internationalizednumber = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/number/dist/main.js [app-ssr] (ecmascript)");
var $1NItU$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useNumberFormatter", ()=>$fea93c5b7c90d9f4$export$b7a616150fdb9f44);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $fea93c5b7c90d9f4$export$b7a616150fdb9f44(options = {}) {
    let { locale: locale } = (0, $47fa5ec5ff482271$exports.useLocale)();
    return (0, $1NItU$react.useMemo)(()=>new (0, $1NItU$internationalizednumber.NumberFormatter)(locale, options), [
        locale,
        options
    ]);
} //# sourceMappingURL=useNumberFormatter.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/useCollator.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $47fa5ec5ff482271$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/context.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useCollator", ()=>$27a5ce66022270ad$export$a16aca283550c30d);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ let $27a5ce66022270ad$var$cache = new Map();
function $27a5ce66022270ad$export$a16aca283550c30d(options) {
    let { locale: locale } = (0, $47fa5ec5ff482271$exports.useLocale)();
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if ($27a5ce66022270ad$var$cache.has(cacheKey)) return $27a5ce66022270ad$var$cache.get(cacheKey);
    let formatter = new Intl.Collator(locale, options);
    $27a5ce66022270ad$var$cache.set(cacheKey, formatter);
    return formatter;
} //# sourceMappingURL=useCollator.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/useFilter.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $27a5ce66022270ad$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/useCollator.main.js [app-ssr] (ecmascript)");
var $c0oFg$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useFilter", ()=>$832d079b867c7223$export$3274cf84b703fff);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $832d079b867c7223$export$3274cf84b703fff(options) {
    let collator = (0, $27a5ce66022270ad$exports.useCollator)({
        usage: 'search',
        ...options
    });
    // TODO(later): these methods don't currently support the ignorePunctuation option.
    let startsWith = (0, $c0oFg$react.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        // Normalize both strings so we can slice safely
        // TODO: take into account the ignorePunctuation option as well...
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        return collator.compare(string.slice(0, substring.length), substring) === 0;
    }, [
        collator
    ]);
    let endsWith = (0, $c0oFg$react.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        return collator.compare(string.slice(-substring.length), substring) === 0;
    }, [
        collator
    ]);
    let contains = (0, $c0oFg$react.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        let scan = 0;
        let sliceLen = substring.length;
        for(; scan + sliceLen <= string.length; scan++){
            let slice = string.slice(scan, scan + sliceLen);
            if (collator.compare(substring, slice) === 0) return true;
        }
        return false;
    }, [
        collator
    ]);
    return (0, $c0oFg$react.useMemo)(()=>({
            startsWith: startsWith,
            endsWith: endsWith,
            contains: contains
        }), [
        startsWith,
        endsWith,
        contains
    ]);
} //# sourceMappingURL=useFilter.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $47fa5ec5ff482271$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/context.main.js [app-ssr] (ecmascript)");
var $c376aa482226bf60$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/useMessageFormatter.main.js [app-ssr] (ecmascript)");
var $fc53663969a3d00a$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/useLocalizedStringFormatter.main.js [app-ssr] (ecmascript)");
var $cb6a3e7d490e97a4$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/useListFormatter.main.js [app-ssr] (ecmascript)");
var $b80c530ff2e20243$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/useDateFormatter.main.js [app-ssr] (ecmascript)");
var $fea93c5b7c90d9f4$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/useNumberFormatter.main.js [app-ssr] (ecmascript)");
var $27a5ce66022270ad$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/useCollator.main.js [app-ssr] (ecmascript)");
var $832d079b867c7223$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/useFilter.main.js [app-ssr] (ecmascript)");
var $4d65847630a056a8$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/utils.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "I18nProvider", ()=>$47fa5ec5ff482271$exports.I18nProvider);
$parcel$export(module.exports, "useLocale", ()=>$47fa5ec5ff482271$exports.useLocale);
$parcel$export(module.exports, "useMessageFormatter", ()=>$c376aa482226bf60$exports.useMessageFormatter);
$parcel$export(module.exports, "useLocalizedStringFormatter", ()=>$fc53663969a3d00a$exports.useLocalizedStringFormatter);
$parcel$export(module.exports, "useLocalizedStringDictionary", ()=>$fc53663969a3d00a$exports.useLocalizedStringDictionary);
$parcel$export(module.exports, "useListFormatter", ()=>$cb6a3e7d490e97a4$exports.useListFormatter);
$parcel$export(module.exports, "useDateFormatter", ()=>$b80c530ff2e20243$exports.useDateFormatter);
$parcel$export(module.exports, "useNumberFormatter", ()=>$fea93c5b7c90d9f4$exports.useNumberFormatter);
$parcel$export(module.exports, "useCollator", ()=>$27a5ce66022270ad$exports.useCollator);
$parcel$export(module.exports, "useFilter", ()=>$832d079b867c7223$exports.useFilter);
$parcel$export(module.exports, "isRTL", ()=>$4d65847630a056a8$exports.isRTL); /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */  //# sourceMappingURL=main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/utils.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "isRTL", ()=>$4d65847630a056a8$export$702d680b21cbd764);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // https://en.wikipedia.org/wiki/Right-to-left
const $4d65847630a056a8$var$RTL_SCRIPTS = new Set([
    'Arab',
    'Syrc',
    'Samr',
    'Mand',
    'Thaa',
    'Mend',
    'Nkoo',
    'Adlm',
    'Rohg',
    'Hebr'
]);
const $4d65847630a056a8$var$RTL_LANGS = new Set([
    'ae',
    'ar',
    'arc',
    'bcc',
    'bqi',
    'ckb',
    'dv',
    'fa',
    'glk',
    'he',
    'ku',
    'mzn',
    'nqo',
    'pnb',
    'ps',
    'sd',
    'ug',
    'ur',
    'yi'
]);
function $4d65847630a056a8$export$702d680b21cbd764(localeString) {
    // If the Intl.Locale API is available, use it to get the locale's text direction.
    if (Intl.Locale) {
        let locale = new Intl.Locale(localeString).maximize();
        // Use the text info object to get the direction if possible.
        // @ts-ignore - this was implemented as a property by some browsers before it was standardized as a function.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTextInfo
        let textInfo = typeof locale.getTextInfo === 'function' ? locale.getTextInfo() : locale.textInfo;
        if (textInfo) return textInfo.direction === 'rtl';
        // Fallback: guess using the script.
        // This is more accurate than guessing by language, since languages can be written in multiple scripts.
        if (locale.script) return $4d65847630a056a8$var$RTL_SCRIPTS.has(locale.script);
    }
    // If not, just guess by the language (first part of the locale)
    let lang = localeString.split('-')[0];
    return $4d65847630a056a8$var$RTL_LANGS.has(lang);
} //# sourceMappingURL=utils.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/useDefaultLocale.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $4d65847630a056a8$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/utils.main.js [app-ssr] (ecmascript)");
var $5Ie0C$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $5Ie0C$reactariassr = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/ssr/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useDefaultLocale", ()=>$2919bdec75484e64$export$188ec29ebc2bdc3a);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Locale passed from server by PackageLocalizationProvider.
const $2919bdec75484e64$var$localeSymbol = Symbol.for('react-aria.i18n.locale');
function $2919bdec75484e64$export$f09106e7c6677ec5() {
    let locale = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window[$2919bdec75484e64$var$localeSymbol] || typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage) || 'en-US';
    try {
        Intl.DateTimeFormat.supportedLocalesOf([
            locale
        ]);
    } catch  {
        locale = 'en-US';
    }
    return {
        locale: locale,
        direction: (0, $4d65847630a056a8$exports.isRTL)(locale) ? 'rtl' : 'ltr'
    };
}
let $2919bdec75484e64$var$currentLocale = $2919bdec75484e64$export$f09106e7c6677ec5();
let $2919bdec75484e64$var$listeners = new Set();
function $2919bdec75484e64$var$updateLocale() {
    $2919bdec75484e64$var$currentLocale = $2919bdec75484e64$export$f09106e7c6677ec5();
    for (let listener of $2919bdec75484e64$var$listeners)listener($2919bdec75484e64$var$currentLocale);
}
function $2919bdec75484e64$export$188ec29ebc2bdc3a() {
    let isSSR = (0, $5Ie0C$reactariassr.useIsSSR)();
    let [defaultLocale, setDefaultLocale] = (0, $5Ie0C$react.useState)($2919bdec75484e64$var$currentLocale);
    (0, $5Ie0C$react.useEffect)(()=>{
        if ($2919bdec75484e64$var$listeners.size === 0) window.addEventListener('languagechange', $2919bdec75484e64$var$updateLocale);
        $2919bdec75484e64$var$listeners.add(setDefaultLocale);
        return ()=>{
            $2919bdec75484e64$var$listeners.delete(setDefaultLocale);
            if ($2919bdec75484e64$var$listeners.size === 0) window.removeEventListener('languagechange', $2919bdec75484e64$var$updateLocale);
        };
    }, []);
    // We cannot determine the browser's language on the server, so default to
    // en-US. This will be updated after hydration on the client to the correct value.
    if (isSSR) return {
        locale: 'en-US',
        direction: 'ltr'
    };
    return defaultLocale;
} //# sourceMappingURL=useDefaultLocale.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/context.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $4d65847630a056a8$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/utils.main.js [app-ssr] (ecmascript)");
var $2919bdec75484e64$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/useDefaultLocale.main.js [app-ssr] (ecmascript)");
var $e7RNT$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "I18nProvider", ()=>$47fa5ec5ff482271$export$a54013f0d02a8f82);
$parcel$export(module.exports, "useLocale", ()=>$47fa5ec5ff482271$export$43bb16f9c6d9e3f7);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $47fa5ec5ff482271$var$I18nContext = /*#__PURE__*/ (0, $parcel$interopDefault($e7RNT$react)).createContext(null);
/**
 * Internal component that handles the case when locale is provided.
 */ function $47fa5ec5ff482271$var$I18nProviderWithLocale(props) {
    let { locale: locale, children: children } = props;
    let value = (0, $parcel$interopDefault($e7RNT$react)).useMemo(()=>({
            locale: locale,
            direction: (0, $4d65847630a056a8$exports.isRTL)(locale) ? 'rtl' : 'ltr'
        }), [
        locale
    ]);
    return /*#__PURE__*/ (0, $parcel$interopDefault($e7RNT$react)).createElement($47fa5ec5ff482271$var$I18nContext.Provider, {
        value: value
    }, children);
}
/**
 * Internal component that handles the case when no locale is provided.
 */ function $47fa5ec5ff482271$var$I18nProviderWithDefaultLocale(props) {
    let { children: children } = props;
    let defaultLocale = (0, $2919bdec75484e64$exports.useDefaultLocale)();
    return /*#__PURE__*/ (0, $parcel$interopDefault($e7RNT$react)).createElement($47fa5ec5ff482271$var$I18nContext.Provider, {
        value: defaultLocale
    }, children);
}
function $47fa5ec5ff482271$export$a54013f0d02a8f82(props) {
    let { locale: locale, children: children } = props;
    // Conditionally render different components to avoid calling useDefaultLocale.
    // This is necessary because useDefaultLocale triggers a re-render.
    if (locale) return /*#__PURE__*/ (0, $parcel$interopDefault($e7RNT$react)).createElement($47fa5ec5ff482271$var$I18nProviderWithLocale, {
        locale: locale,
        children: children
    });
    return /*#__PURE__*/ (0, $parcel$interopDefault($e7RNT$react)).createElement($47fa5ec5ff482271$var$I18nProviderWithDefaultLocale, {
        children: children
    });
}
function $47fa5ec5ff482271$export$43bb16f9c6d9e3f7() {
    let defaultLocale = (0, $2919bdec75484e64$exports.useDefaultLocale)();
    let context = (0, $e7RNT$react.useContext)($47fa5ec5ff482271$var$I18nContext);
    return context || defaultLocale;
} //# sourceMappingURL=context.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/useMessageFormatter.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $47fa5ec5ff482271$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/context.main.js [app-ssr] (ecmascript)");
var $8WbGG$internationalizedmessage = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/message/dist/main.js [app-ssr] (ecmascript)");
var $8WbGG$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useMessageFormatter", ()=>$c376aa482226bf60$export$ec23bf898b1eed85);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $c376aa482226bf60$var$cache = new WeakMap();
function $c376aa482226bf60$var$getCachedDictionary(strings) {
    let dictionary = $c376aa482226bf60$var$cache.get(strings);
    if (!dictionary) {
        dictionary = new (0, $8WbGG$internationalizedmessage.MessageDictionary)(strings);
        $c376aa482226bf60$var$cache.set(strings, dictionary);
    }
    return dictionary;
}
function $c376aa482226bf60$export$ec23bf898b1eed85(strings) {
    let { locale: locale } = (0, $47fa5ec5ff482271$exports.useLocale)();
    let dictionary = (0, $8WbGG$react.useMemo)(()=>$c376aa482226bf60$var$getCachedDictionary(strings), [
        strings
    ]);
    let formatter = (0, $8WbGG$react.useMemo)(()=>new (0, $8WbGG$internationalizedmessage.MessageFormatter)(locale, dictionary), [
        locale,
        dictionary
    ]);
    return (0, $8WbGG$react.useCallback)((key, variables)=>formatter.format(key, variables), [
        formatter
    ]);
} //# sourceMappingURL=useMessageFormatter.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/useLocalizedStringFormatter.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $47fa5ec5ff482271$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/context.main.js [app-ssr] (ecmascript)");
var $fbyBw$internationalizedstring = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/string/dist/main.js [app-ssr] (ecmascript)");
var $fbyBw$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useLocalizedStringDictionary", ()=>$fc53663969a3d00a$export$87b761675e8eaa10);
$parcel$export(module.exports, "useLocalizedStringFormatter", ()=>$fc53663969a3d00a$export$f12b703ca79dfbb1);
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $fc53663969a3d00a$var$cache = new WeakMap();
function $fc53663969a3d00a$var$getCachedDictionary(strings) {
    let dictionary = $fc53663969a3d00a$var$cache.get(strings);
    if (!dictionary) {
        dictionary = new (0, $fbyBw$internationalizedstring.LocalizedStringDictionary)(strings);
        $fc53663969a3d00a$var$cache.set(strings, dictionary);
    }
    return dictionary;
}
function $fc53663969a3d00a$export$87b761675e8eaa10(strings, packageName) {
    return packageName && (0, $fbyBw$internationalizedstring.LocalizedStringDictionary).getGlobalDictionaryForPackage(packageName) || $fc53663969a3d00a$var$getCachedDictionary(strings);
}
function $fc53663969a3d00a$export$f12b703ca79dfbb1(strings, packageName) {
    let { locale: locale } = (0, $47fa5ec5ff482271$exports.useLocale)();
    let dictionary = $fc53663969a3d00a$export$87b761675e8eaa10(strings, packageName);
    return (0, $fbyBw$react.useMemo)(()=>new (0, $fbyBw$internationalizedstring.LocalizedStringFormatter)(locale, dictionary), [
        locale,
        dictionary
    ]);
} //# sourceMappingURL=useLocalizedStringFormatter.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/useListFormatter.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $47fa5ec5ff482271$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/context.main.js [app-ssr] (ecmascript)");
var $3UK6J$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useListFormatter", ()=>$cb6a3e7d490e97a4$export$a2f47a3d2973640);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $cb6a3e7d490e97a4$export$a2f47a3d2973640(options = {}) {
    let { locale: locale } = (0, $47fa5ec5ff482271$exports.useLocale)();
    return (0, $3UK6J$react.useMemo)(()=>new Intl.ListFormat(locale, options), [
        locale,
        options
    ]);
} //# sourceMappingURL=useListFormatter.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/useDateFormatter.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $47fa5ec5ff482271$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/context.main.js [app-ssr] (ecmascript)");
var $9DCmA$internationalizeddate = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/date/dist/main.js [app-ssr] (ecmascript)");
var $9DCmA$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $9DCmA$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useDateFormatter", ()=>$b80c530ff2e20243$export$85fd5fdf27bacc79);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $b80c530ff2e20243$export$85fd5fdf27bacc79(options) {
    // Reuse last options object if it is shallowly equal, which allows the useMemo result to also be reused.
    options = (0, $9DCmA$reactariautils.useDeepMemo)(options !== null && options !== void 0 ? options : {}, $b80c530ff2e20243$var$isEqual);
    let { locale: locale } = (0, $47fa5ec5ff482271$exports.useLocale)();
    return (0, $9DCmA$react.useMemo)(()=>new (0, $9DCmA$internationalizeddate.DateFormatter)(locale, options), [
        locale,
        options
    ]);
}
function $b80c530ff2e20243$var$isEqual(a, b) {
    if (a === b) return true;
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    for (let key of aKeys){
        if (b[key] !== a[key]) return false;
    }
    return true;
} //# sourceMappingURL=useDateFormatter.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/useNumberFormatter.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $47fa5ec5ff482271$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/context.main.js [app-ssr] (ecmascript)");
var $1NItU$internationalizednumber = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/number/dist/main.js [app-ssr] (ecmascript)");
var $1NItU$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useNumberFormatter", ()=>$fea93c5b7c90d9f4$export$b7a616150fdb9f44);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $fea93c5b7c90d9f4$export$b7a616150fdb9f44(options = {}) {
    let { locale: locale } = (0, $47fa5ec5ff482271$exports.useLocale)();
    return (0, $1NItU$react.useMemo)(()=>new (0, $1NItU$internationalizednumber.NumberFormatter)(locale, options), [
        locale,
        options
    ]);
} //# sourceMappingURL=useNumberFormatter.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/useCollator.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $47fa5ec5ff482271$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/context.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useCollator", ()=>$27a5ce66022270ad$export$a16aca283550c30d);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ let $27a5ce66022270ad$var$cache = new Map();
function $27a5ce66022270ad$export$a16aca283550c30d(options) {
    let { locale: locale } = (0, $47fa5ec5ff482271$exports.useLocale)();
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if ($27a5ce66022270ad$var$cache.has(cacheKey)) return $27a5ce66022270ad$var$cache.get(cacheKey);
    let formatter = new Intl.Collator(locale, options);
    $27a5ce66022270ad$var$cache.set(cacheKey, formatter);
    return formatter;
} //# sourceMappingURL=useCollator.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/useFilter.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $27a5ce66022270ad$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/useCollator.main.js [app-ssr] (ecmascript)");
var $c0oFg$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useFilter", ()=>$832d079b867c7223$export$3274cf84b703fff);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $832d079b867c7223$export$3274cf84b703fff(options) {
    let collator = (0, $27a5ce66022270ad$exports.useCollator)({
        usage: 'search',
        ...options
    });
    // TODO(later): these methods don't currently support the ignorePunctuation option.
    let startsWith = (0, $c0oFg$react.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        // Normalize both strings so we can slice safely
        // TODO: take into account the ignorePunctuation option as well...
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        return collator.compare(string.slice(0, substring.length), substring) === 0;
    }, [
        collator
    ]);
    let endsWith = (0, $c0oFg$react.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        return collator.compare(string.slice(-substring.length), substring) === 0;
    }, [
        collator
    ]);
    let contains = (0, $c0oFg$react.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        let scan = 0;
        let sliceLen = substring.length;
        for(; scan + sliceLen <= string.length; scan++){
            let slice = string.slice(scan, scan + sliceLen);
            if (collator.compare(substring, slice) === 0) return true;
        }
        return false;
    }, [
        collator
    ]);
    return (0, $c0oFg$react.useMemo)(()=>({
            startsWith: startsWith,
            endsWith: endsWith,
            contains: contains
        }), [
        startsWith,
        endsWith,
        contains
    ]);
} //# sourceMappingURL=useFilter.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $47fa5ec5ff482271$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/context.main.js [app-ssr] (ecmascript)");
var $c376aa482226bf60$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/useMessageFormatter.main.js [app-ssr] (ecmascript)");
var $fc53663969a3d00a$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/useLocalizedStringFormatter.main.js [app-ssr] (ecmascript)");
var $cb6a3e7d490e97a4$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/useListFormatter.main.js [app-ssr] (ecmascript)");
var $b80c530ff2e20243$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/useDateFormatter.main.js [app-ssr] (ecmascript)");
var $fea93c5b7c90d9f4$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/useNumberFormatter.main.js [app-ssr] (ecmascript)");
var $27a5ce66022270ad$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/useCollator.main.js [app-ssr] (ecmascript)");
var $832d079b867c7223$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/useFilter.main.js [app-ssr] (ecmascript)");
var $4d65847630a056a8$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/utils.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "I18nProvider", ()=>$47fa5ec5ff482271$exports.I18nProvider);
$parcel$export(module.exports, "useLocale", ()=>$47fa5ec5ff482271$exports.useLocale);
$parcel$export(module.exports, "useMessageFormatter", ()=>$c376aa482226bf60$exports.useMessageFormatter);
$parcel$export(module.exports, "useLocalizedStringFormatter", ()=>$fc53663969a3d00a$exports.useLocalizedStringFormatter);
$parcel$export(module.exports, "useLocalizedStringDictionary", ()=>$fc53663969a3d00a$exports.useLocalizedStringDictionary);
$parcel$export(module.exports, "useListFormatter", ()=>$cb6a3e7d490e97a4$exports.useListFormatter);
$parcel$export(module.exports, "useDateFormatter", ()=>$b80c530ff2e20243$exports.useDateFormatter);
$parcel$export(module.exports, "useNumberFormatter", ()=>$fea93c5b7c90d9f4$exports.useNumberFormatter);
$parcel$export(module.exports, "useCollator", ()=>$27a5ce66022270ad$exports.useCollator);
$parcel$export(module.exports, "useFilter", ()=>$832d079b867c7223$exports.useFilter);
$parcel$export(module.exports, "isRTL", ()=>$4d65847630a056a8$exports.isRTL); /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */  //# sourceMappingURL=main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-aria/visually-hidden/dist/VisuallyHidden.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $2ohTN$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $2ohTN$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $2ohTN$reactariainteractions = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-aria/interactions/dist/main.js [app-ssr] (ecmascript)");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useVisuallyHidden", ()=>$b5c81b25cdf7a43c$export$a966af930f325cab);
$parcel$export(module.exports, "VisuallyHidden", ()=>$b5c81b25cdf7a43c$export$439d29a4e110a164);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $b5c81b25cdf7a43c$var$styles = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: '1px',
    whiteSpace: 'nowrap'
};
function $b5c81b25cdf7a43c$export$a966af930f325cab(props = {}) {
    let { style: style, isFocusable: isFocusable } = props;
    let [isFocused, setFocused] = (0, $2ohTN$react.useState)(false);
    let { focusWithinProps: focusWithinProps } = (0, $2ohTN$reactariainteractions.useFocusWithin)({
        isDisabled: !isFocusable,
        onFocusWithinChange: (val)=>setFocused(val)
    });
    // If focused, don't hide the element.
    let combinedStyles = (0, $2ohTN$react.useMemo)(()=>{
        if (isFocused) return style;
        else if (style) return {
            ...$b5c81b25cdf7a43c$var$styles,
            ...style
        };
        else return $b5c81b25cdf7a43c$var$styles;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isFocused
    ]);
    return {
        visuallyHiddenProps: {
            ...focusWithinProps,
            style: combinedStyles
        }
    };
}
function $b5c81b25cdf7a43c$export$439d29a4e110a164(props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { children: children, elementType: Element = 'div', isFocusable: isFocusable, style: style, ...otherProps } = props;
    let { visuallyHiddenProps: visuallyHiddenProps } = $b5c81b25cdf7a43c$export$a966af930f325cab(props);
    return /*#__PURE__*/ (0, $parcel$interopDefault($2ohTN$react)).createElement(Element, (0, $2ohTN$reactariautils.mergeProps)(otherProps, visuallyHiddenProps), children);
} //# sourceMappingURL=VisuallyHidden.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-aria/visually-hidden/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $b5c81b25cdf7a43c$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-aria/visually-hidden/dist/VisuallyHidden.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useVisuallyHidden", ()=>$b5c81b25cdf7a43c$exports.useVisuallyHidden);
$parcel$export(module.exports, "VisuallyHidden", ()=>$b5c81b25cdf7a43c$exports.VisuallyHidden); /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */  //# sourceMappingURL=main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/dist/useDialog.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $HoXek$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $HoXek$reactariafocus = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/focus/dist/main.js [app-ssr] (ecmascript)");
var $HoXek$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $HoXek$reactariaoverlays = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useDialog", ()=>$e7b76b4fae4e4c55$export$d55e7ee900f34e93);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $e7b76b4fae4e4c55$export$d55e7ee900f34e93(props, ref) {
    let { role: role = 'dialog' } = props;
    let titleId = (0, $HoXek$reactariautils.useSlotId)();
    titleId = props['aria-label'] ? undefined : titleId;
    let isRefocusing = (0, $HoXek$react.useRef)(false);
    // Focus the dialog itself on mount, unless a child element is already focused.
    (0, $HoXek$react.useEffect)(()=>{
        if (ref.current && !ref.current.contains(document.activeElement)) {
            (0, $HoXek$reactariafocus.focusSafely)(ref.current);
            // Safari on iOS does not move the VoiceOver cursor to the dialog
            // or announce that it has opened until it has rendered. A workaround
            // is to wait for half a second, then blur and re-focus the dialog.
            let timeout = setTimeout(()=>{
                if (document.activeElement === ref.current) {
                    isRefocusing.current = true;
                    if (ref.current) {
                        ref.current.blur();
                        (0, $HoXek$reactariafocus.focusSafely)(ref.current);
                    }
                    isRefocusing.current = false;
                }
            }, 500);
            return ()=>{
                clearTimeout(timeout);
            };
        }
    }, [
        ref
    ]);
    (0, $HoXek$reactariaoverlays.useOverlayFocusContain)();
    // We do not use aria-modal due to a Safari bug which forces the first focusable element to be focused
    // on mount when inside an iframe, no matter which element we programmatically focus.
    // See https://bugs.webkit.org/show_bug.cgi?id=211934.
    // useModal sets aria-hidden on all elements outside the dialog, so the dialog will behave as a modal
    // even without aria-modal on the dialog itself.
    return {
        dialogProps: {
            ...(0, $HoXek$reactariautils.filterDOMProps)(props, {
                labelable: true
            }),
            role: role,
            tabIndex: -1,
            'aria-labelledby': props['aria-labelledby'] || titleId,
            // Prevent blur events from reaching useOverlay, which may cause
            // popovers to close. Since focus is contained within the dialog,
            // we don't want this to occur due to the above useEffect.
            onBlur: (e)=>{
                if (isRefocusing.current) e.stopPropagation();
            }
        },
        titleProps: {
            id: titleId
        }
    };
} //# sourceMappingURL=useDialog.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $e7b76b4fae4e4c55$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/dist/useDialog.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useDialog", ()=>$e7b76b4fae4e4c55$exports.useDialog); /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */  //# sourceMappingURL=main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/tabs/dist/utils.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "tabsIds", ()=>$a217ebca77471970$export$c5f62239608282b6);
$parcel$export(module.exports, "generateId", ()=>$a217ebca77471970$export$567fc7097e064344);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $a217ebca77471970$export$c5f62239608282b6 = new WeakMap();
function $a217ebca77471970$export$567fc7097e064344(state, key, role) {
    if (!state) return '';
    if (typeof key === 'string') key = key.replace(/\s+/g, '');
    let baseId = $a217ebca77471970$export$c5f62239608282b6.get(state);
    return `${baseId}-${role}-${key}`;
} //# sourceMappingURL=utils.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/tabs/dist/useTab.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $a217ebca77471970$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/tabs/dist/utils.main.js [app-ssr] (ecmascript)");
var $dX61C$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/tabs/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $dX61C$reactariaselection = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useTab", ()=>$4eeea1c984cc0628$export$fdf4756d5b8ef90a);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $4eeea1c984cc0628$export$fdf4756d5b8ef90a(props, state, ref) {
    let { key: key, isDisabled: propsDisabled, shouldSelectOnPressUp: shouldSelectOnPressUp } = props;
    let { selectionManager: manager, selectedKey: selectedKey } = state;
    let isSelected = key === selectedKey;
    let isDisabled = propsDisabled || state.isDisabled || state.selectionManager.isDisabled(key);
    let { itemProps: itemProps, isPressed: isPressed } = (0, $dX61C$reactariaselection.useSelectableItem)({
        selectionManager: manager,
        key: key,
        ref: ref,
        isDisabled: isDisabled,
        shouldSelectOnPressUp: shouldSelectOnPressUp,
        linkBehavior: 'selection'
    });
    let tabId = (0, $a217ebca77471970$exports.generateId)(state, key, 'tab');
    let tabPanelId = (0, $a217ebca77471970$exports.generateId)(state, key, 'tabpanel');
    let { tabIndex: tabIndex } = itemProps;
    let item = state.collection.getItem(key);
    let domProps = (0, $dX61C$reactariautils.filterDOMProps)(item === null || item === void 0 ? void 0 : item.props, {
        labelable: true
    });
    delete domProps.id;
    let linkProps = (0, $dX61C$reactariautils.useLinkProps)(item === null || item === void 0 ? void 0 : item.props);
    return {
        tabProps: (0, $dX61C$reactariautils.mergeProps)(domProps, linkProps, itemProps, {
            id: tabId,
            'aria-selected': isSelected,
            'aria-disabled': isDisabled || undefined,
            'aria-controls': isSelected ? tabPanelId : undefined,
            tabIndex: isDisabled ? undefined : tabIndex,
            role: 'tab'
        }),
        isSelected: isSelected,
        isDisabled: isDisabled,
        isPressed: isPressed
    };
} //# sourceMappingURL=useTab.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/tabs/dist/useTabPanel.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $a217ebca77471970$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/tabs/dist/utils.main.js [app-ssr] (ecmascript)");
var $8Zd8I$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/tabs/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $8Zd8I$reactariafocus = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/tabs/node_modules/@react-aria/focus/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useTabPanel", ()=>$8db1928b18472a1f$export$fae0121b5afe572d);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $8db1928b18472a1f$export$fae0121b5afe572d(props, state, ref) {
    // The tabpanel should have tabIndex=0 when there are no tabbable elements within it.
    // Otherwise, tabbing from the focused tab should go directly to the first tabbable element
    // within the tabpanel.
    let tabIndex = (0, $8Zd8I$reactariafocus.useHasTabbableChild)(ref) ? undefined : 0;
    var _props_id;
    const id = (0, $a217ebca77471970$exports.generateId)(state, (_props_id = props.id) !== null && _props_id !== void 0 ? _props_id : state === null || state === void 0 ? void 0 : state.selectedKey, 'tabpanel');
    const tabPanelProps = (0, $8Zd8I$reactariautils.useLabels)({
        ...props,
        id: id,
        'aria-labelledby': (0, $a217ebca77471970$exports.generateId)(state, state === null || state === void 0 ? void 0 : state.selectedKey, 'tab')
    });
    return {
        tabPanelProps: (0, $8Zd8I$reactariautils.mergeProps)(tabPanelProps, {
            tabIndex: tabIndex,
            role: 'tabpanel',
            'aria-describedby': props['aria-describedby'],
            'aria-details': props['aria-details']
        })
    };
} //# sourceMappingURL=useTabPanel.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/tabs/dist/TabsKeyboardDelegate.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "TabsKeyboardDelegate", ()=>$283e5d8830177ead$export$15010ca3c1abe90b);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ class $283e5d8830177ead$export$15010ca3c1abe90b {
    getKeyLeftOf(key) {
        if (this.flipDirection) return this.getNextKey(key);
        return this.getPreviousKey(key);
    }
    getKeyRightOf(key) {
        if (this.flipDirection) return this.getPreviousKey(key);
        return this.getNextKey(key);
    }
    isDisabled(key) {
        var _this_collection_getItem_props, _this_collection_getItem;
        return this.disabledKeys.has(key) || !!((_this_collection_getItem = this.collection.getItem(key)) === null || _this_collection_getItem === void 0 ? void 0 : (_this_collection_getItem_props = _this_collection_getItem.props) === null || _this_collection_getItem_props === void 0 ? void 0 : _this_collection_getItem_props.isDisabled);
    }
    getFirstKey() {
        let key = this.collection.getFirstKey();
        if (key != null && this.isDisabled(key)) key = this.getNextKey(key);
        return key;
    }
    getLastKey() {
        let key = this.collection.getLastKey();
        if (key != null && this.isDisabled(key)) key = this.getPreviousKey(key);
        return key;
    }
    getKeyAbove(key) {
        if (this.tabDirection) return null;
        return this.getPreviousKey(key);
    }
    getKeyBelow(key) {
        if (this.tabDirection) return null;
        return this.getNextKey(key);
    }
    getNextKey(key) {
        do {
            key = this.collection.getKeyAfter(key);
            if (key == null) key = this.collection.getFirstKey();
        }while (this.isDisabled(key))
        return key;
    }
    getPreviousKey(key) {
        do {
            key = this.collection.getKeyBefore(key);
            if (key == null) key = this.collection.getLastKey();
        }while (this.isDisabled(key))
        return key;
    }
    constructor(collection, direction, orientation, disabledKeys = new Set()){
        this.collection = collection;
        this.flipDirection = direction === 'rtl' && orientation === 'horizontal';
        this.disabledKeys = disabledKeys;
        this.tabDirection = orientation === 'horizontal';
    }
} //# sourceMappingURL=TabsKeyboardDelegate.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/tabs/dist/useTabList.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $a217ebca77471970$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/tabs/dist/utils.main.js [app-ssr] (ecmascript)");
var $283e5d8830177ead$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/tabs/dist/TabsKeyboardDelegate.main.js [app-ssr] (ecmascript)");
var $c5HcZ$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/tabs/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $c5HcZ$reactariai18n = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/main.js [app-ssr] (ecmascript)");
var $c5HcZ$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $c5HcZ$reactariaselection = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useTabList", ()=>$f2b4a4926440e901$export$773e389e644c5874);
/*
* Copyright 2020 Adobe. All rights reserved.
* This file is licensed to you under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License. You may obtain a copy
* of the License at http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software distributed under
* the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
* OF ANY KIND, either express or implied. See the License for the specific language
* governing permissions and limitations under the License.
*/ function $f2b4a4926440e901$export$773e389e644c5874(props, state, ref) {
    let { orientation: orientation = 'horizontal', keyboardActivation: keyboardActivation = 'automatic' } = props;
    let { collection: collection, selectionManager: manager, disabledKeys: disabledKeys } = state;
    let { direction: direction } = (0, $c5HcZ$reactariai18n.useLocale)();
    let delegate = (0, $c5HcZ$react.useMemo)(()=>new (0, $283e5d8830177ead$exports.TabsKeyboardDelegate)(collection, direction, orientation, disabledKeys), [
        collection,
        disabledKeys,
        orientation,
        direction
    ]);
    let { collectionProps: collectionProps } = (0, $c5HcZ$reactariaselection.useSelectableCollection)({
        ref: ref,
        selectionManager: manager,
        keyboardDelegate: delegate,
        selectOnFocus: keyboardActivation === 'automatic',
        disallowEmptySelection: true,
        scrollRef: ref,
        linkBehavior: 'selection'
    });
    // Compute base id for all tabs
    let tabsId = (0, $c5HcZ$reactariautils.useId)();
    (0, $a217ebca77471970$exports.tabsIds).set(state, tabsId);
    let tabListLabelProps = (0, $c5HcZ$reactariautils.useLabels)({
        ...props,
        id: tabsId
    });
    return {
        tabListProps: {
            ...(0, $c5HcZ$reactariautils.mergeProps)(collectionProps, tabListLabelProps),
            role: 'tablist',
            'aria-orientation': orientation,
            tabIndex: undefined
        }
    };
} //# sourceMappingURL=useTabList.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/tabs/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $4eeea1c984cc0628$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/tabs/dist/useTab.main.js [app-ssr] (ecmascript)");
var $8db1928b18472a1f$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/tabs/dist/useTabPanel.main.js [app-ssr] (ecmascript)");
var $f2b4a4926440e901$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/tabs/dist/useTabList.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useTab", ()=>$4eeea1c984cc0628$exports.useTab);
$parcel$export(module.exports, "useTabPanel", ()=>$8db1928b18472a1f$exports.useTabPanel);
$parcel$export(module.exports, "useTabList", ()=>$f2b4a4926440e901$exports.useTabList); /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */  //# sourceMappingURL=main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/utils.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $gP8Dl$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "isNonContiguousSelectionModifier", ()=>$ee0bdf4faa47f2a8$export$d3e3bd3e26688c04);
$parcel$export(module.exports, "getItemElement", ()=>$ee0bdf4faa47f2a8$export$c3d8340acf92597f);
$parcel$export(module.exports, "useCollectionId", ()=>$ee0bdf4faa47f2a8$export$881eb0d9f3605d9d);
$parcel$export(module.exports, "getCollectionId", ()=>$ee0bdf4faa47f2a8$export$6aeb1680a0ae8741);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $ee0bdf4faa47f2a8$export$d3e3bd3e26688c04(e) {
    // Ctrl + Arrow Up/Arrow Down has a system wide meaning on macOS, so use Alt instead.
    // On Windows and Ubuntu, Alt + Space has a system wide meaning.
    return (0, $gP8Dl$reactariautils.isAppleDevice)() ? e.altKey : e.ctrlKey;
}
function $ee0bdf4faa47f2a8$export$c3d8340acf92597f(collectionRef, key) {
    var _collectionRef_current, _collectionRef_current1;
    let selector = `[data-key="${CSS.escape(String(key))}"]`;
    let collection = (_collectionRef_current = collectionRef.current) === null || _collectionRef_current === void 0 ? void 0 : _collectionRef_current.dataset.collection;
    if (collection) selector = `[data-collection="${CSS.escape(collection)}"]${selector}`;
    return (_collectionRef_current1 = collectionRef.current) === null || _collectionRef_current1 === void 0 ? void 0 : _collectionRef_current1.querySelector(selector);
}
const $ee0bdf4faa47f2a8$var$collectionMap = new WeakMap();
function $ee0bdf4faa47f2a8$export$881eb0d9f3605d9d(collection) {
    let id = (0, $gP8Dl$reactariautils.useId)();
    $ee0bdf4faa47f2a8$var$collectionMap.set(collection, id);
    return id;
}
function $ee0bdf4faa47f2a8$export$6aeb1680a0ae8741(collection) {
    return $ee0bdf4faa47f2a8$var$collectionMap.get(collection);
} //# sourceMappingURL=utils.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/useTypeSelect.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $3XJlT$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useTypeSelect", ()=>$a1189052f36475e8$export$e32c88dfddc6e1d8);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * Controls how long to wait before clearing the typeahead buffer.
 */ const $a1189052f36475e8$var$TYPEAHEAD_DEBOUNCE_WAIT_MS = 1000; // 1 second
function $a1189052f36475e8$export$e32c88dfddc6e1d8(options) {
    let { keyboardDelegate: keyboardDelegate, selectionManager: selectionManager, onTypeSelect: onTypeSelect } = options;
    let state = (0, $3XJlT$react.useRef)({
        search: '',
        timeout: undefined
    }).current;
    let onKeyDown = (e)=>{
        let character = $a1189052f36475e8$var$getStringForKey(e.key);
        if (!character || e.ctrlKey || e.metaKey || !e.currentTarget.contains(e.target) || state.search.length === 0 && character === ' ') return;
        // Do not propagate the Spacebar event if it's meant to be part of the search.
        // When we time out, the search term becomes empty, hence the check on length.
        // Trimming is to account for the case of pressing the Spacebar more than once,
        // which should cycle through the selection/deselection of the focused item.
        if (character === ' ' && state.search.trim().length > 0) {
            e.preventDefault();
            if (!('continuePropagation' in e)) e.stopPropagation();
        }
        state.search += character;
        if (keyboardDelegate.getKeyForSearch != null) {
            // Use the delegate to find a key to focus.
            // Prioritize items after the currently focused item, falling back to searching the whole list.
            let key = keyboardDelegate.getKeyForSearch(state.search, selectionManager.focusedKey);
            // If no key found, search from the top.
            if (key == null) key = keyboardDelegate.getKeyForSearch(state.search);
            if (key != null) {
                selectionManager.setFocusedKey(key);
                if (onTypeSelect) onTypeSelect(key);
            }
        }
        clearTimeout(state.timeout);
        state.timeout = setTimeout(()=>{
            state.search = '';
        }, $a1189052f36475e8$var$TYPEAHEAD_DEBOUNCE_WAIT_MS);
    };
    return {
        typeSelectProps: {
            // Using a capturing listener to catch the keydown event before
            // other hooks in order to handle the Spacebar event.
            onKeyDownCapture: keyboardDelegate.getKeyForSearch ? onKeyDown : undefined
        }
    };
}
function $a1189052f36475e8$var$getStringForKey(key) {
    // If the key is of length 1, it is an ASCII value.
    // Otherwise, if there are no ASCII characters in the key name,
    // it is a Unicode character.
    // See https://www.w3.org/TR/uievents-key/
    if (key.length === 1 || !/^[A-Z]/i.test(key)) return key;
    return '';
} //# sourceMappingURL=useTypeSelect.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/useSelectableCollection.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ee0bdf4faa47f2a8$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/utils.main.js [app-ssr] (ecmascript)");
var $a1189052f36475e8$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/useTypeSelect.main.js [app-ssr] (ecmascript)");
var $bT8Bh$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $bT8Bh$reactariafocus = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/focus/dist/main.js [app-ssr] (ecmascript)");
var $bT8Bh$reactdom = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var $bT8Bh$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $bT8Bh$reactariainteractions = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/interactions/dist/main.js [app-ssr] (ecmascript)");
var $bT8Bh$reactariai18n = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useSelectableCollection", ()=>$b6837c2f80a3c32f$export$d6daf82dcd84e87c);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $b6837c2f80a3c32f$export$d6daf82dcd84e87c(options) {
    let { selectionManager: manager, keyboardDelegate: delegate, ref: ref, autoFocus: autoFocus = false, shouldFocusWrap: shouldFocusWrap = false, disallowEmptySelection: disallowEmptySelection = false, disallowSelectAll: disallowSelectAll = false, escapeKeyBehavior: escapeKeyBehavior = 'clearSelection', selectOnFocus: selectOnFocus = manager.selectionBehavior === 'replace', disallowTypeAhead: disallowTypeAhead = false, shouldUseVirtualFocus: shouldUseVirtualFocus, allowsTabNavigation: allowsTabNavigation = false, isVirtualized: isVirtualized, scrollRef: scrollRef = ref, linkBehavior: linkBehavior = 'action' } = options;
    let { direction: direction } = (0, $bT8Bh$reactariai18n.useLocale)();
    let router = (0, $bT8Bh$reactariautils.useRouter)();
    let onKeyDown = (e)=>{
        var _ref_current;
        // Prevent option + tab from doing anything since it doesn't move focus to the cells, only buttons/checkboxes
        if (e.altKey && e.key === 'Tab') e.preventDefault();
        // Keyboard events bubble through portals. Don't handle keyboard events
        // for elements outside the collection (e.g. menus).
        if (!((_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.contains(e.target))) return;
        const navigateToKey = (key, childFocus)=>{
            if (key != null) {
                if (manager.isLink(key) && linkBehavior === 'selection' && selectOnFocus && !(0, $ee0bdf4faa47f2a8$exports.isNonContiguousSelectionModifier)(e)) {
                    // Set focused key and re-render synchronously to bring item into view if needed.
                    (0, $bT8Bh$reactdom.flushSync)(()=>{
                        manager.setFocusedKey(key, childFocus);
                    });
                    let item = (0, $ee0bdf4faa47f2a8$exports.getItemElement)(ref, key);
                    let itemProps = manager.getItemProps(key);
                    if (item) router.open(item, e, itemProps.href, itemProps.routerOptions);
                    return;
                }
                manager.setFocusedKey(key, childFocus);
                if (manager.isLink(key) && linkBehavior === 'override') return;
                if (e.shiftKey && manager.selectionMode === 'multiple') manager.extendSelection(key);
                else if (selectOnFocus && !(0, $ee0bdf4faa47f2a8$exports.isNonContiguousSelectionModifier)(e)) manager.replaceSelection(key);
            }
        };
        switch(e.key){
            case 'ArrowDown':
                if (delegate.getKeyBelow) {
                    var _delegate_getKeyBelow, _delegate_getFirstKey, _delegate_getFirstKey1;
                    let nextKey = manager.focusedKey != null ? (_delegate_getKeyBelow = delegate.getKeyBelow) === null || _delegate_getKeyBelow === void 0 ? void 0 : _delegate_getKeyBelow.call(delegate, manager.focusedKey) : (_delegate_getFirstKey = delegate.getFirstKey) === null || _delegate_getFirstKey === void 0 ? void 0 : _delegate_getFirstKey.call(delegate);
                    if (nextKey == null && shouldFocusWrap) nextKey = (_delegate_getFirstKey1 = delegate.getFirstKey) === null || _delegate_getFirstKey1 === void 0 ? void 0 : _delegate_getFirstKey1.call(delegate, manager.focusedKey);
                    if (nextKey != null) {
                        e.preventDefault();
                        navigateToKey(nextKey);
                    }
                }
                break;
            case 'ArrowUp':
                if (delegate.getKeyAbove) {
                    var _delegate_getKeyAbove, _delegate_getLastKey, _delegate_getLastKey1;
                    let nextKey = manager.focusedKey != null ? (_delegate_getKeyAbove = delegate.getKeyAbove) === null || _delegate_getKeyAbove === void 0 ? void 0 : _delegate_getKeyAbove.call(delegate, manager.focusedKey) : (_delegate_getLastKey = delegate.getLastKey) === null || _delegate_getLastKey === void 0 ? void 0 : _delegate_getLastKey.call(delegate);
                    if (nextKey == null && shouldFocusWrap) nextKey = (_delegate_getLastKey1 = delegate.getLastKey) === null || _delegate_getLastKey1 === void 0 ? void 0 : _delegate_getLastKey1.call(delegate, manager.focusedKey);
                    if (nextKey != null) {
                        e.preventDefault();
                        navigateToKey(nextKey);
                    }
                }
                break;
            case 'ArrowLeft':
                if (delegate.getKeyLeftOf) {
                    var _delegate_getKeyLeftOf, _delegate_getFirstKey2, _delegate_getLastKey2;
                    let nextKey = manager.focusedKey != null ? (_delegate_getKeyLeftOf = delegate.getKeyLeftOf) === null || _delegate_getKeyLeftOf === void 0 ? void 0 : _delegate_getKeyLeftOf.call(delegate, manager.focusedKey) : null;
                    if (nextKey == null && shouldFocusWrap) nextKey = direction === 'rtl' ? (_delegate_getFirstKey2 = delegate.getFirstKey) === null || _delegate_getFirstKey2 === void 0 ? void 0 : _delegate_getFirstKey2.call(delegate, manager.focusedKey) : (_delegate_getLastKey2 = delegate.getLastKey) === null || _delegate_getLastKey2 === void 0 ? void 0 : _delegate_getLastKey2.call(delegate, manager.focusedKey);
                    if (nextKey != null) {
                        e.preventDefault();
                        navigateToKey(nextKey, direction === 'rtl' ? 'first' : 'last');
                    }
                }
                break;
            case 'ArrowRight':
                if (delegate.getKeyRightOf) {
                    var _delegate_getKeyRightOf, _delegate_getLastKey3, _delegate_getFirstKey3;
                    let nextKey = manager.focusedKey != null ? (_delegate_getKeyRightOf = delegate.getKeyRightOf) === null || _delegate_getKeyRightOf === void 0 ? void 0 : _delegate_getKeyRightOf.call(delegate, manager.focusedKey) : null;
                    if (nextKey == null && shouldFocusWrap) nextKey = direction === 'rtl' ? (_delegate_getLastKey3 = delegate.getLastKey) === null || _delegate_getLastKey3 === void 0 ? void 0 : _delegate_getLastKey3.call(delegate, manager.focusedKey) : (_delegate_getFirstKey3 = delegate.getFirstKey) === null || _delegate_getFirstKey3 === void 0 ? void 0 : _delegate_getFirstKey3.call(delegate, manager.focusedKey);
                    if (nextKey != null) {
                        e.preventDefault();
                        navigateToKey(nextKey, direction === 'rtl' ? 'last' : 'first');
                    }
                }
                break;
            case 'Home':
                if (delegate.getFirstKey) {
                    if (manager.focusedKey === null && e.shiftKey) return;
                    e.preventDefault();
                    let firstKey = delegate.getFirstKey(manager.focusedKey, (0, $bT8Bh$reactariautils.isCtrlKeyPressed)(e));
                    manager.setFocusedKey(firstKey);
                    if (firstKey != null) {
                        if ((0, $bT8Bh$reactariautils.isCtrlKeyPressed)(e) && e.shiftKey && manager.selectionMode === 'multiple') manager.extendSelection(firstKey);
                        else if (selectOnFocus) manager.replaceSelection(firstKey);
                    }
                }
                break;
            case 'End':
                if (delegate.getLastKey) {
                    if (manager.focusedKey === null && e.shiftKey) return;
                    e.preventDefault();
                    let lastKey = delegate.getLastKey(manager.focusedKey, (0, $bT8Bh$reactariautils.isCtrlKeyPressed)(e));
                    manager.setFocusedKey(lastKey);
                    if (lastKey != null) {
                        if ((0, $bT8Bh$reactariautils.isCtrlKeyPressed)(e) && e.shiftKey && manager.selectionMode === 'multiple') manager.extendSelection(lastKey);
                        else if (selectOnFocus) manager.replaceSelection(lastKey);
                    }
                }
                break;
            case 'PageDown':
                if (delegate.getKeyPageBelow && manager.focusedKey != null) {
                    let nextKey = delegate.getKeyPageBelow(manager.focusedKey);
                    if (nextKey != null) {
                        e.preventDefault();
                        navigateToKey(nextKey);
                    }
                }
                break;
            case 'PageUp':
                if (delegate.getKeyPageAbove && manager.focusedKey != null) {
                    let nextKey = delegate.getKeyPageAbove(manager.focusedKey);
                    if (nextKey != null) {
                        e.preventDefault();
                        navigateToKey(nextKey);
                    }
                }
                break;
            case 'a':
                if ((0, $bT8Bh$reactariautils.isCtrlKeyPressed)(e) && manager.selectionMode === 'multiple' && disallowSelectAll !== true) {
                    e.preventDefault();
                    manager.selectAll();
                }
                break;
            case 'Escape':
                if (escapeKeyBehavior === 'clearSelection' && !disallowEmptySelection && manager.selectedKeys.size !== 0) {
                    e.stopPropagation();
                    e.preventDefault();
                    manager.clearSelection();
                }
                break;
            case 'Tab':
                if (!allowsTabNavigation) {
                    // There may be elements that are "tabbable" inside a collection (e.g. in a grid cell).
                    // However, collections should be treated as a single tab stop, with arrow key navigation internally.
                    // We don't control the rendering of these, so we can't override the tabIndex to prevent tabbing.
                    // Instead, we handle the Tab key, and move focus manually to the first/last tabbable element
                    // in the collection, so that the browser default behavior will apply starting from that element
                    // rather than the currently focused one.
                    if (e.shiftKey) ref.current.focus();
                    else {
                        let walker = (0, $bT8Bh$reactariafocus.getFocusableTreeWalker)(ref.current, {
                            tabbable: true
                        });
                        let next = undefined;
                        let last;
                        do {
                            last = walker.lastChild();
                            if (last) next = last;
                        }while (last)
                        if (next && !next.contains(document.activeElement)) (0, $bT8Bh$reactariautils.focusWithoutScrolling)(next);
                    }
                    break;
                }
        }
    };
    // Store the scroll position so we can restore it later.
    /// TODO: should this happen all the time??
    let scrollPos = (0, $bT8Bh$react.useRef)({
        top: 0,
        left: 0
    });
    (0, $bT8Bh$reactariautils.useEvent)(scrollRef, 'scroll', isVirtualized ? undefined : ()=>{
        var _scrollRef_current, _scrollRef_current1;
        var _scrollRef_current_scrollTop, _scrollRef_current_scrollLeft;
        scrollPos.current = {
            top: (_scrollRef_current_scrollTop = (_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 ? void 0 : _scrollRef_current.scrollTop) !== null && _scrollRef_current_scrollTop !== void 0 ? _scrollRef_current_scrollTop : 0,
            left: (_scrollRef_current_scrollLeft = (_scrollRef_current1 = scrollRef.current) === null || _scrollRef_current1 === void 0 ? void 0 : _scrollRef_current1.scrollLeft) !== null && _scrollRef_current_scrollLeft !== void 0 ? _scrollRef_current_scrollLeft : 0
        };
    });
    let onFocus = (e)=>{
        if (manager.isFocused) {
            // If a focus event bubbled through a portal, reset focus state.
            if (!e.currentTarget.contains(e.target)) manager.setFocused(false);
            return;
        }
        // Focus events can bubble through portals. Ignore these events.
        if (!e.currentTarget.contains(e.target)) return;
        manager.setFocused(true);
        if (manager.focusedKey == null) {
            var _delegate_getLastKey, _delegate_getFirstKey;
            let navigateToKey = (key)=>{
                if (key != null) {
                    manager.setFocusedKey(key);
                    if (selectOnFocus && !manager.isSelected(key)) manager.replaceSelection(key);
                }
            };
            // If the user hasn't yet interacted with the collection, there will be no focusedKey set.
            // Attempt to detect whether the user is tabbing forward or backward into the collection
            // and either focus the first or last item accordingly.
            let relatedTarget = e.relatedTarget;
            var _manager_lastSelectedKey, _manager_firstSelectedKey;
            if (relatedTarget && e.currentTarget.compareDocumentPosition(relatedTarget) & Node.DOCUMENT_POSITION_FOLLOWING) navigateToKey((_manager_lastSelectedKey = manager.lastSelectedKey) !== null && _manager_lastSelectedKey !== void 0 ? _manager_lastSelectedKey : (_delegate_getLastKey = delegate.getLastKey) === null || _delegate_getLastKey === void 0 ? void 0 : _delegate_getLastKey.call(delegate));
            else navigateToKey((_manager_firstSelectedKey = manager.firstSelectedKey) !== null && _manager_firstSelectedKey !== void 0 ? _manager_firstSelectedKey : (_delegate_getFirstKey = delegate.getFirstKey) === null || _delegate_getFirstKey === void 0 ? void 0 : _delegate_getFirstKey.call(delegate));
        } else if (!isVirtualized && scrollRef.current) {
            // Restore the scroll position to what it was before.
            scrollRef.current.scrollTop = scrollPos.current.top;
            scrollRef.current.scrollLeft = scrollPos.current.left;
        }
        if (manager.focusedKey != null && scrollRef.current) {
            // Refocus and scroll the focused item into view if it exists within the scrollable region.
            let element = (0, $ee0bdf4faa47f2a8$exports.getItemElement)(ref, manager.focusedKey);
            if (element instanceof HTMLElement) {
                // This prevents a flash of focus on the first/last element in the collection, or the collection itself.
                if (!element.contains(document.activeElement) && !shouldUseVirtualFocus) (0, $bT8Bh$reactariautils.focusWithoutScrolling)(element);
                let modality = (0, $bT8Bh$reactariainteractions.getInteractionModality)();
                if (modality === 'keyboard') (0, $bT8Bh$reactariautils.scrollIntoViewport)(element, {
                    containingElement: ref.current
                });
            }
        }
    };
    let onBlur = (e)=>{
        // Don't set blurred and then focused again if moving focus within the collection.
        if (!e.currentTarget.contains(e.relatedTarget)) manager.setFocused(false);
    };
    // Ref to track whether the first item in the collection should be automatically focused. Specifically used for autocomplete when user types
    // to focus the first key AFTER the collection updates.
    // TODO: potentially expand the usage of this
    let shouldVirtualFocusFirst = (0, $bT8Bh$react.useRef)(false);
    // Add event listeners for custom virtual events. These handle updating the focused key in response to various keyboard events
    // at the autocomplete level
    // TODO: fix type later
    (0, $bT8Bh$reactariautils.useEvent)(ref, (0, $bT8Bh$reactariautils.FOCUS_EVENT), !shouldUseVirtualFocus ? undefined : (e)=>{
        let { detail: detail } = e;
        e.stopPropagation();
        manager.setFocused(true);
        // If the user is typing forwards, autofocus the first option in the list.
        if ((detail === null || detail === void 0 ? void 0 : detail.focusStrategy) === 'first') shouldVirtualFocusFirst.current = true;
    });
    let updateActiveDescendant = (0, $bT8Bh$reactariautils.useEffectEvent)(()=>{
        var _delegate_getFirstKey;
        var _delegate_getFirstKey1;
        let keyToFocus = (_delegate_getFirstKey1 = (_delegate_getFirstKey = delegate.getFirstKey) === null || _delegate_getFirstKey === void 0 ? void 0 : _delegate_getFirstKey.call(delegate)) !== null && _delegate_getFirstKey1 !== void 0 ? _delegate_getFirstKey1 : null;
        // If no focusable items exist in the list, make sure to clear any activedescendant that may still exist and move focus back to
        // the original active element (e.g. the autocomplete input)
        if (keyToFocus == null) {
            let previousActiveElement = (0, $bT8Bh$reactariautils.getActiveElement)();
            (0, $bT8Bh$reactariafocus.moveVirtualFocus)(ref.current);
            (0, $bT8Bh$reactariafocus.dispatchVirtualFocus)(previousActiveElement, null);
            // If there wasn't a focusable key but the collection had items, then that means we aren't in an intermediate load state and all keys are disabled.
            // Reset shouldVirtualFocusFirst so that we don't erronously autofocus an item when the collection is filtered again.
            if (manager.collection.size > 0) shouldVirtualFocusFirst.current = false;
        } else {
            manager.setFocusedKey(keyToFocus);
            // Only set shouldVirtualFocusFirst to false if we've successfully set the first key as the focused key
            // If there wasn't a key to focus, we might be in a temporary loading state so we'll want to still focus the first key
            // after the collection updates after load
            shouldVirtualFocusFirst.current = false;
        }
    });
    (0, $bT8Bh$reactariautils.useUpdateLayoutEffect)(()=>{
        if (shouldVirtualFocusFirst.current) updateActiveDescendant();
    }, [
        manager.collection,
        updateActiveDescendant
    ]);
    let resetFocusFirstFlag = (0, $bT8Bh$reactariautils.useEffectEvent)(()=>{
        // If user causes the focused key to change in any other way, clear shouldVirtualFocusFirst so we don't
        // accidentally move focus from under them. Skip this if the collection was empty because we might be in a load
        // state and will still want to focus the first item after load
        if (manager.collection.size > 0) shouldVirtualFocusFirst.current = false;
    });
    (0, $bT8Bh$reactariautils.useUpdateLayoutEffect)(()=>{
        resetFocusFirstFlag();
    }, [
        manager.focusedKey,
        resetFocusFirstFlag
    ]);
    (0, $bT8Bh$reactariautils.useEvent)(ref, (0, $bT8Bh$reactariautils.CLEAR_FOCUS_EVENT), !shouldUseVirtualFocus ? undefined : (e)=>{
        var _e_detail;
        e.stopPropagation();
        manager.setFocused(false);
        if ((_e_detail = e.detail) === null || _e_detail === void 0 ? void 0 : _e_detail.clearFocusKey) manager.setFocusedKey(null);
    });
    const autoFocusRef = (0, $bT8Bh$react.useRef)(autoFocus);
    const didAutoFocusRef = (0, $bT8Bh$react.useRef)(false);
    (0, $bT8Bh$react.useEffect)(()=>{
        if (autoFocusRef.current) {
            var _delegate_getFirstKey, _delegate_getLastKey;
            let focusedKey = null;
            var _delegate_getFirstKey1;
            // Check focus strategy to determine which item to focus
            if (autoFocus === 'first') focusedKey = (_delegate_getFirstKey1 = (_delegate_getFirstKey = delegate.getFirstKey) === null || _delegate_getFirstKey === void 0 ? void 0 : _delegate_getFirstKey.call(delegate)) !== null && _delegate_getFirstKey1 !== void 0 ? _delegate_getFirstKey1 : null;
            var _delegate_getLastKey1;
            if (autoFocus === 'last') focusedKey = (_delegate_getLastKey1 = (_delegate_getLastKey = delegate.getLastKey) === null || _delegate_getLastKey === void 0 ? void 0 : _delegate_getLastKey.call(delegate)) !== null && _delegate_getLastKey1 !== void 0 ? _delegate_getLastKey1 : null;
            // If there are any selected keys, make the first one the new focus target
            let selectedKeys = manager.selectedKeys;
            if (selectedKeys.size) {
                for (let key of selectedKeys)if (manager.canSelectItem(key)) {
                    focusedKey = key;
                    break;
                }
            }
            manager.setFocused(true);
            manager.setFocusedKey(focusedKey);
            // If no default focus key is selected, focus the collection itself.
            if (focusedKey == null && !shouldUseVirtualFocus && ref.current) (0, $bT8Bh$reactariainteractions.focusSafely)(ref.current);
            // Wait until the collection has items to autofocus.
            if (manager.collection.size > 0) {
                autoFocusRef.current = false;
                didAutoFocusRef.current = true;
            }
        }
    });
    // Scroll the focused element into view when the focusedKey changes.
    let lastFocusedKey = (0, $bT8Bh$react.useRef)(manager.focusedKey);
    let raf = (0, $bT8Bh$react.useRef)(null);
    (0, $bT8Bh$react.useEffect)(()=>{
        if (manager.isFocused && manager.focusedKey != null && (manager.focusedKey !== lastFocusedKey.current || didAutoFocusRef.current) && scrollRef.current && ref.current) {
            let modality = (0, $bT8Bh$reactariainteractions.getInteractionModality)();
            let element = (0, $ee0bdf4faa47f2a8$exports.getItemElement)(ref, manager.focusedKey);
            if (!(element instanceof HTMLElement)) // The collection may initially be empty (e.g. virtualizer), so wait until the element exists.
            return;
            if (modality === 'keyboard' || didAutoFocusRef.current) {
                if (raf.current) cancelAnimationFrame(raf.current);
                raf.current = requestAnimationFrame(()=>{
                    if (scrollRef.current) {
                        (0, $bT8Bh$reactariautils.scrollIntoView)(scrollRef.current, element);
                        // Avoid scroll in iOS VO, since it may cause overlay to close (i.e. RAC submenu)
                        if (modality !== 'virtual') (0, $bT8Bh$reactariautils.scrollIntoViewport)(element, {
                            containingElement: ref.current
                        });
                    }
                });
            }
        }
        // If the focused key becomes null (e.g. the last item is deleted), focus the whole collection.
        if (!shouldUseVirtualFocus && manager.isFocused && manager.focusedKey == null && lastFocusedKey.current != null && ref.current) (0, $bT8Bh$reactariainteractions.focusSafely)(ref.current);
        lastFocusedKey.current = manager.focusedKey;
        didAutoFocusRef.current = false;
    });
    (0, $bT8Bh$react.useEffect)(()=>{
        return ()=>{
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, []);
    // Intercept FocusScope restoration since virtualized collections can reuse DOM nodes.
    (0, $bT8Bh$reactariautils.useEvent)(ref, 'react-aria-focus-scope-restore', (e)=>{
        e.preventDefault();
        manager.setFocused(true);
    });
    let handlers = {
        onKeyDown: onKeyDown,
        onFocus: onFocus,
        onBlur: onBlur,
        onMouseDown (e) {
            // Ignore events that bubbled through portals.
            if (scrollRef.current === e.target) e.preventDefault();
        }
    };
    let { typeSelectProps: typeSelectProps } = (0, $a1189052f36475e8$exports.useTypeSelect)({
        keyboardDelegate: delegate,
        selectionManager: manager
    });
    if (!disallowTypeAhead) handlers = (0, $bT8Bh$reactariautils.mergeProps)(typeSelectProps, handlers);
    // If nothing is focused within the collection, make the collection itself tabbable.
    // This will be marshalled to either the first or last item depending on where focus came from.
    let tabIndex = undefined;
    if (!shouldUseVirtualFocus) tabIndex = manager.focusedKey == null ? 0 : -1;
    let collectionId = (0, $ee0bdf4faa47f2a8$exports.useCollectionId)(manager.collection);
    return {
        collectionProps: (0, $bT8Bh$reactariautils.mergeProps)(handlers, {
            tabIndex: tabIndex,
            'data-collection': collectionId
        })
    };
} //# sourceMappingURL=useSelectableCollection.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/useSelectableItem.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ee0bdf4faa47f2a8$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/utils.main.js [app-ssr] (ecmascript)");
var $i4XHw$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $i4XHw$reactariainteractions = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/interactions/dist/main.js [app-ssr] (ecmascript)");
var $i4XHw$reactariafocus = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/focus/dist/main.js [app-ssr] (ecmascript)");
var $i4XHw$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useSelectableItem", ()=>$433b1145b0781e10$export$ecf600387e221c37);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $433b1145b0781e10$export$ecf600387e221c37(options) {
    let { id: id, selectionManager: manager, key: key, ref: ref, shouldSelectOnPressUp: shouldSelectOnPressUp, shouldUseVirtualFocus: shouldUseVirtualFocus, focus: focus, isDisabled: isDisabled, onAction: onAction, allowsDifferentPressOrigin: allowsDifferentPressOrigin, linkBehavior: linkBehavior = 'action' } = options;
    let router = (0, $i4XHw$reactariautils.useRouter)();
    id = (0, $i4XHw$reactariautils.useId)(id);
    let onSelect = (e)=>{
        if (e.pointerType === 'keyboard' && (0, $ee0bdf4faa47f2a8$exports.isNonContiguousSelectionModifier)(e)) manager.toggleSelection(key);
        else {
            if (manager.selectionMode === 'none') return;
            if (manager.isLink(key)) {
                if (linkBehavior === 'selection' && ref.current) {
                    let itemProps = manager.getItemProps(key);
                    router.open(ref.current, e, itemProps.href, itemProps.routerOptions);
                    // Always set selected keys back to what they were so that select and combobox close.
                    manager.setSelectedKeys(manager.selectedKeys);
                    return;
                } else if (linkBehavior === 'override' || linkBehavior === 'none') return;
            }
            if (manager.selectionMode === 'single') {
                if (manager.isSelected(key) && !manager.disallowEmptySelection) manager.toggleSelection(key);
                else manager.replaceSelection(key);
            } else if (e && e.shiftKey) manager.extendSelection(key);
            else if (manager.selectionBehavior === 'toggle' || e && ((0, $i4XHw$reactariautils.isCtrlKeyPressed)(e) || e.pointerType === 'touch' || e.pointerType === 'virtual')) manager.toggleSelection(key);
            else manager.replaceSelection(key);
        }
    };
    // Focus the associated DOM node when this item becomes the focusedKey
    // TODO: can't make this useLayoutEffect bacause it breaks menus inside dialogs
    // However, if this is a useEffect, it runs twice and dispatches two blur events and immediately sets
    // aria-activeDescendant in useAutocomplete... I've worked around this for now
    (0, $i4XHw$react.useEffect)(()=>{
        let isFocused = key === manager.focusedKey;
        if (isFocused && manager.isFocused) {
            if (!shouldUseVirtualFocus) {
                if (focus) focus();
                else if (document.activeElement !== ref.current && ref.current) (0, $i4XHw$reactariainteractions.focusSafely)(ref.current);
            } else (0, $i4XHw$reactariafocus.moveVirtualFocus)(ref.current);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        ref,
        key,
        manager.focusedKey,
        manager.childFocusStrategy,
        manager.isFocused,
        shouldUseVirtualFocus
    ]);
    isDisabled = isDisabled || manager.isDisabled(key);
    // Set tabIndex to 0 if the element is focused, or -1 otherwise so that only the last focused
    // item is tabbable.  If using virtual focus, don't set a tabIndex at all so that VoiceOver
    // on iOS 14 doesn't try to move real DOM focus to the item anyway.
    let itemProps = {};
    if (!shouldUseVirtualFocus && !isDisabled) itemProps = {
        tabIndex: key === manager.focusedKey ? 0 : -1,
        onFocus (e) {
            if (e.target === ref.current) manager.setFocusedKey(key);
        }
    };
    else if (isDisabled) itemProps.onMouseDown = (e)=>{
        // Prevent focus going to the body when clicking on a disabled item.
        e.preventDefault();
    };
    // With checkbox selection, onAction (i.e. navigation) becomes primary, and occurs on a single click of the row.
    // Clicking the checkbox enters selection mode, after which clicking anywhere on any row toggles selection for that row.
    // With highlight selection, onAction is secondary, and occurs on double click. Single click selects the row.
    // With touch, onAction occurs on single tap, and long press enters selection mode.
    let isLinkOverride = manager.isLink(key) && linkBehavior === 'override';
    let isActionOverride = onAction && options['UNSTABLE_itemBehavior'] === 'action';
    let hasLinkAction = manager.isLink(key) && linkBehavior !== 'selection' && linkBehavior !== 'none';
    let allowsSelection = !isDisabled && manager.canSelectItem(key) && !isLinkOverride && !isActionOverride;
    let allowsActions = (onAction || hasLinkAction) && !isDisabled;
    let hasPrimaryAction = allowsActions && (manager.selectionBehavior === 'replace' ? !allowsSelection : !allowsSelection || manager.isEmpty);
    let hasSecondaryAction = allowsActions && allowsSelection && manager.selectionBehavior === 'replace';
    let hasAction = hasPrimaryAction || hasSecondaryAction;
    let modality = (0, $i4XHw$react.useRef)(null);
    let longPressEnabled = hasAction && allowsSelection;
    let longPressEnabledOnPressStart = (0, $i4XHw$react.useRef)(false);
    let hadPrimaryActionOnPressStart = (0, $i4XHw$react.useRef)(false);
    let collectionItemProps = manager.getItemProps(key);
    let performAction = (e)=>{
        if (onAction) {
            var _ref_current;
            onAction();
            (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.dispatchEvent(new CustomEvent('react-aria-item-action', {
                bubbles: true
            }));
        }
        if (hasLinkAction && ref.current) router.open(ref.current, e, collectionItemProps.href, collectionItemProps.routerOptions);
    };
    // By default, selection occurs on pointer down. This can be strange if selecting an
    // item causes the UI to disappear immediately (e.g. menus).
    // If shouldSelectOnPressUp is true, we use onPressUp instead of onPressStart.
    // onPress requires a pointer down event on the same element as pointer up. For menus,
    // we want to be able to have the pointer down on the trigger that opens the menu and
    // the pointer up on the menu item rather than requiring a separate press.
    // For keyboard events, selection still occurs on key down.
    let itemPressProps = {
        ref: ref
    };
    if (shouldSelectOnPressUp) {
        itemPressProps.onPressStart = (e)=>{
            modality.current = e.pointerType;
            longPressEnabledOnPressStart.current = longPressEnabled;
            if (e.pointerType === 'keyboard' && (!hasAction || $433b1145b0781e10$var$isSelectionKey())) onSelect(e);
        };
        // If allowsDifferentPressOrigin and interacting with mouse, make selection happen on pressUp (e.g. open menu on press down, selection on menu item happens on press up.)
        // Otherwise, have selection happen onPress (prevents listview row selection when clicking on interactable elements in the row)
        if (!allowsDifferentPressOrigin) itemPressProps.onPress = (e)=>{
            if (hasPrimaryAction || hasSecondaryAction && e.pointerType !== 'mouse') {
                if (e.pointerType === 'keyboard' && !$433b1145b0781e10$var$isActionKey()) return;
                performAction(e);
            } else if (e.pointerType !== 'keyboard' && allowsSelection) onSelect(e);
        };
        else {
            itemPressProps.onPressUp = hasPrimaryAction ? undefined : (e)=>{
                if (e.pointerType === 'mouse' && allowsSelection) onSelect(e);
            };
            itemPressProps.onPress = hasPrimaryAction ? performAction : (e)=>{
                if (e.pointerType !== 'keyboard' && e.pointerType !== 'mouse' && allowsSelection) onSelect(e);
            };
        }
    } else {
        itemPressProps.onPressStart = (e)=>{
            modality.current = e.pointerType;
            longPressEnabledOnPressStart.current = longPressEnabled;
            hadPrimaryActionOnPressStart.current = hasPrimaryAction;
            // Select on mouse down unless there is a primary action which will occur on mouse up.
            // For keyboard, select on key down. If there is an action, the Space key selects on key down,
            // and the Enter key performs onAction on key up.
            if (allowsSelection && (e.pointerType === 'mouse' && !hasPrimaryAction || e.pointerType === 'keyboard' && (!allowsActions || $433b1145b0781e10$var$isSelectionKey()))) onSelect(e);
        };
        itemPressProps.onPress = (e)=>{
            // Selection occurs on touch up. Primary actions always occur on pointer up.
            // Both primary and secondary actions occur on Enter key up. The only exception
            // is secondary actions, which occur on double click with a mouse.
            if (e.pointerType === 'touch' || e.pointerType === 'pen' || e.pointerType === 'virtual' || e.pointerType === 'keyboard' && hasAction && $433b1145b0781e10$var$isActionKey() || e.pointerType === 'mouse' && hadPrimaryActionOnPressStart.current) {
                if (hasAction) performAction(e);
                else if (allowsSelection) onSelect(e);
            }
        };
    }
    itemProps['data-collection'] = (0, $ee0bdf4faa47f2a8$exports.getCollectionId)(manager.collection);
    itemProps['data-key'] = key;
    itemPressProps.preventFocusOnPress = shouldUseVirtualFocus;
    // When using virtual focus, make sure the focused key gets updated on press.
    if (shouldUseVirtualFocus) itemPressProps = (0, $i4XHw$reactariautils.mergeProps)(itemPressProps, {
        onPressStart (e) {
            if (e.pointerType !== 'touch') {
                manager.setFocused(true);
                manager.setFocusedKey(key);
            }
        },
        onPress (e) {
            if (e.pointerType === 'touch') {
                manager.setFocused(true);
                manager.setFocusedKey(key);
            }
        }
    });
    if (collectionItemProps) {
        for (let key of [
            'onPressStart',
            'onPressEnd',
            'onPressChange',
            'onPress',
            'onPressUp',
            'onClick'
        ])if (collectionItemProps[key]) itemPressProps[key] = (0, $i4XHw$reactariautils.chain)(itemPressProps[key], collectionItemProps[key]);
    }
    let { pressProps: pressProps, isPressed: isPressed } = (0, $i4XHw$reactariainteractions.usePress)(itemPressProps);
    // Double clicking with a mouse with selectionBehavior = 'replace' performs an action.
    let onDoubleClick = hasSecondaryAction ? (e)=>{
        if (modality.current === 'mouse') {
            e.stopPropagation();
            e.preventDefault();
            performAction(e);
        }
    } : undefined;
    // Long pressing an item with touch when selectionBehavior = 'replace' switches the selection behavior
    // to 'toggle'. This changes the single tap behavior from performing an action (i.e. navigating) to
    // selecting, and may toggle the appearance of a UI affordance like checkboxes on each item.
    let { longPressProps: longPressProps } = (0, $i4XHw$reactariainteractions.useLongPress)({
        isDisabled: !longPressEnabled,
        onLongPress (e) {
            if (e.pointerType === 'touch') {
                onSelect(e);
                manager.setSelectionBehavior('toggle');
            }
        }
    });
    // Prevent native drag and drop on long press if we also select on long press.
    // Once the user is in selection mode, they can long press again to drag.
    // Use a capturing listener to ensure this runs before useDrag, regardless of
    // the order the props get merged.
    let onDragStartCapture = (e)=>{
        if (modality.current === 'touch' && longPressEnabledOnPressStart.current) e.preventDefault();
    };
    // Prevent default on link clicks so that we control exactly
    // when they open (to match selection behavior).
    let onClick = linkBehavior !== 'none' && manager.isLink(key) ? (e)=>{
        if (!(0, $i4XHw$reactariautils.openLink).isOpening) e.preventDefault();
    } : undefined;
    return {
        itemProps: (0, $i4XHw$reactariautils.mergeProps)(itemProps, allowsSelection || hasPrimaryAction || shouldUseVirtualFocus && !isDisabled ? pressProps : {}, longPressEnabled ? longPressProps : {}, {
            onDoubleClick: onDoubleClick,
            onDragStartCapture: onDragStartCapture,
            onClick: onClick,
            id: id
        }, shouldUseVirtualFocus ? {
            onMouseDown: (e)=>e.preventDefault()
        } : undefined),
        isPressed: isPressed,
        isSelected: manager.isSelected(key),
        isFocused: manager.isFocused && manager.focusedKey === key,
        isDisabled: isDisabled,
        allowsSelection: allowsSelection,
        hasAction: hasAction
    };
}
function $433b1145b0781e10$var$isActionKey() {
    let event = window.event;
    return (event === null || event === void 0 ? void 0 : event.key) === 'Enter';
}
function $433b1145b0781e10$var$isSelectionKey() {
    let event = window.event;
    return (event === null || event === void 0 ? void 0 : event.key) === ' ' || (event === null || event === void 0 ? void 0 : event.code) === 'Space';
} //# sourceMappingURL=useSelectableItem.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/DOMLayoutDelegate.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ee0bdf4faa47f2a8$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/utils.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "DOMLayoutDelegate", ()=>$2ac4508142683dcb$export$8f5ed9ff9f511381);
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ class $2ac4508142683dcb$export$8f5ed9ff9f511381 {
    getItemRect(key) {
        let container = this.ref.current;
        if (!container) return null;
        let item = key != null ? (0, $ee0bdf4faa47f2a8$exports.getItemElement)(this.ref, key) : null;
        if (!item) return null;
        let containerRect = container.getBoundingClientRect();
        let itemRect = item.getBoundingClientRect();
        return {
            x: itemRect.left - containerRect.left - container.clientLeft + container.scrollLeft,
            y: itemRect.top - containerRect.top - container.clientTop + container.scrollTop,
            width: itemRect.width,
            height: itemRect.height
        };
    }
    getContentSize() {
        let container = this.ref.current;
        var _container_scrollWidth, _container_scrollHeight;
        return {
            width: (_container_scrollWidth = container === null || container === void 0 ? void 0 : container.scrollWidth) !== null && _container_scrollWidth !== void 0 ? _container_scrollWidth : 0,
            height: (_container_scrollHeight = container === null || container === void 0 ? void 0 : container.scrollHeight) !== null && _container_scrollHeight !== void 0 ? _container_scrollHeight : 0
        };
    }
    getVisibleRect() {
        let container = this.ref.current;
        var _container_scrollLeft, _container_scrollTop, _container_clientWidth, _container_clientHeight;
        return {
            x: (_container_scrollLeft = container === null || container === void 0 ? void 0 : container.scrollLeft) !== null && _container_scrollLeft !== void 0 ? _container_scrollLeft : 0,
            y: (_container_scrollTop = container === null || container === void 0 ? void 0 : container.scrollTop) !== null && _container_scrollTop !== void 0 ? _container_scrollTop : 0,
            width: (_container_clientWidth = container === null || container === void 0 ? void 0 : container.clientWidth) !== null && _container_clientWidth !== void 0 ? _container_clientWidth : 0,
            height: (_container_clientHeight = container === null || container === void 0 ? void 0 : container.clientHeight) !== null && _container_clientHeight !== void 0 ? _container_clientHeight : 0
        };
    }
    constructor(ref){
        this.ref = ref;
    }
} //# sourceMappingURL=DOMLayoutDelegate.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/ListKeyboardDelegate.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $2ac4508142683dcb$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/DOMLayoutDelegate.main.js [app-ssr] (ecmascript)");
var $doKEG$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "ListKeyboardDelegate", ()=>$836f880b12dcae5c$export$a05409b8bb224a5a);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ class $836f880b12dcae5c$export$a05409b8bb224a5a {
    isDisabled(item) {
        var _item_props;
        return this.disabledBehavior === 'all' && (((_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.isDisabled) || this.disabledKeys.has(item.key));
    }
    findNextNonDisabled(key, getNext) {
        let nextKey = key;
        while(nextKey != null){
            let item = this.collection.getItem(nextKey);
            if ((item === null || item === void 0 ? void 0 : item.type) === 'item' && !this.isDisabled(item)) return nextKey;
            nextKey = getNext(nextKey);
        }
        return null;
    }
    getNextKey(key) {
        let nextKey = key;
        nextKey = this.collection.getKeyAfter(nextKey);
        return this.findNextNonDisabled(nextKey, (key)=>this.collection.getKeyAfter(key));
    }
    getPreviousKey(key) {
        let nextKey = key;
        nextKey = this.collection.getKeyBefore(nextKey);
        return this.findNextNonDisabled(nextKey, (key)=>this.collection.getKeyBefore(key));
    }
    findKey(key, nextKey, shouldSkip) {
        let tempKey = key;
        let itemRect = this.layoutDelegate.getItemRect(tempKey);
        if (!itemRect || tempKey == null) return null;
        // Find the item above or below in the same column.
        let prevRect = itemRect;
        do {
            tempKey = nextKey(tempKey);
            if (tempKey == null) break;
            itemRect = this.layoutDelegate.getItemRect(tempKey);
        }while (itemRect && shouldSkip(prevRect, itemRect) && tempKey != null)
        return tempKey;
    }
    isSameRow(prevRect, itemRect) {
        return prevRect.y === itemRect.y || prevRect.x !== itemRect.x;
    }
    isSameColumn(prevRect, itemRect) {
        return prevRect.x === itemRect.x || prevRect.y !== itemRect.y;
    }
    getKeyBelow(key) {
        if (this.layout === 'grid' && this.orientation === 'vertical') return this.findKey(key, (key)=>this.getNextKey(key), this.isSameRow);
        else return this.getNextKey(key);
    }
    getKeyAbove(key) {
        if (this.layout === 'grid' && this.orientation === 'vertical') return this.findKey(key, (key)=>this.getPreviousKey(key), this.isSameRow);
        else return this.getPreviousKey(key);
    }
    getNextColumn(key, right) {
        return right ? this.getPreviousKey(key) : this.getNextKey(key);
    }
    getKeyRightOf(key) {
        // This is a temporary solution for CardView until we refactor useSelectableCollection.
        // https://github.com/orgs/adobe/projects/19/views/32?pane=issue&itemId=77825042
        let layoutDelegateMethod = this.direction === 'ltr' ? 'getKeyRightOf' : 'getKeyLeftOf';
        if (this.layoutDelegate[layoutDelegateMethod]) {
            key = this.layoutDelegate[layoutDelegateMethod](key);
            return this.findNextNonDisabled(key, (key)=>this.layoutDelegate[layoutDelegateMethod](key));
        }
        if (this.layout === 'grid') {
            if (this.orientation === 'vertical') return this.getNextColumn(key, this.direction === 'rtl');
            else return this.findKey(key, (key)=>this.getNextColumn(key, this.direction === 'rtl'), this.isSameColumn);
        } else if (this.orientation === 'horizontal') return this.getNextColumn(key, this.direction === 'rtl');
        return null;
    }
    getKeyLeftOf(key) {
        let layoutDelegateMethod = this.direction === 'ltr' ? 'getKeyLeftOf' : 'getKeyRightOf';
        if (this.layoutDelegate[layoutDelegateMethod]) {
            key = this.layoutDelegate[layoutDelegateMethod](key);
            return this.findNextNonDisabled(key, (key)=>this.layoutDelegate[layoutDelegateMethod](key));
        }
        if (this.layout === 'grid') {
            if (this.orientation === 'vertical') return this.getNextColumn(key, this.direction === 'ltr');
            else return this.findKey(key, (key)=>this.getNextColumn(key, this.direction === 'ltr'), this.isSameColumn);
        } else if (this.orientation === 'horizontal') return this.getNextColumn(key, this.direction === 'ltr');
        return null;
    }
    getFirstKey() {
        let key = this.collection.getFirstKey();
        return this.findNextNonDisabled(key, (key)=>this.collection.getKeyAfter(key));
    }
    getLastKey() {
        let key = this.collection.getLastKey();
        return this.findNextNonDisabled(key, (key)=>this.collection.getKeyBefore(key));
    }
    getKeyPageAbove(key) {
        let menu = this.ref.current;
        let itemRect = this.layoutDelegate.getItemRect(key);
        if (!itemRect) return null;
        if (menu && !(0, $doKEG$reactariautils.isScrollable)(menu)) return this.getFirstKey();
        let nextKey = key;
        if (this.orientation === 'horizontal') {
            let pageX = Math.max(0, itemRect.x + itemRect.width - this.layoutDelegate.getVisibleRect().width);
            while(itemRect && itemRect.x > pageX && nextKey != null){
                nextKey = this.getKeyAbove(nextKey);
                itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
            }
        } else {
            let pageY = Math.max(0, itemRect.y + itemRect.height - this.layoutDelegate.getVisibleRect().height);
            while(itemRect && itemRect.y > pageY && nextKey != null){
                nextKey = this.getKeyAbove(nextKey);
                itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
            }
        }
        return nextKey !== null && nextKey !== void 0 ? nextKey : this.getFirstKey();
    }
    getKeyPageBelow(key) {
        let menu = this.ref.current;
        let itemRect = this.layoutDelegate.getItemRect(key);
        if (!itemRect) return null;
        if (menu && !(0, $doKEG$reactariautils.isScrollable)(menu)) return this.getLastKey();
        let nextKey = key;
        if (this.orientation === 'horizontal') {
            let pageX = Math.min(this.layoutDelegate.getContentSize().width, itemRect.y - itemRect.width + this.layoutDelegate.getVisibleRect().width);
            while(itemRect && itemRect.x < pageX && nextKey != null){
                nextKey = this.getKeyBelow(nextKey);
                itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
            }
        } else {
            let pageY = Math.min(this.layoutDelegate.getContentSize().height, itemRect.y - itemRect.height + this.layoutDelegate.getVisibleRect().height);
            while(itemRect && itemRect.y < pageY && nextKey != null){
                nextKey = this.getKeyBelow(nextKey);
                itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
            }
        }
        return nextKey !== null && nextKey !== void 0 ? nextKey : this.getLastKey();
    }
    getKeyForSearch(search, fromKey) {
        if (!this.collator) return null;
        let collection = this.collection;
        let key = fromKey || this.getFirstKey();
        while(key != null){
            let item = collection.getItem(key);
            if (!item) return null;
            let substring = item.textValue.slice(0, search.length);
            if (item.textValue && this.collator.compare(substring, search) === 0) return key;
            key = this.getNextKey(key);
        }
        return null;
    }
    constructor(...args){
        if (args.length === 1) {
            let opts = args[0];
            this.collection = opts.collection;
            this.ref = opts.ref;
            this.collator = opts.collator;
            this.disabledKeys = opts.disabledKeys || new Set();
            this.disabledBehavior = opts.disabledBehavior || 'all';
            this.orientation = opts.orientation || 'vertical';
            this.direction = opts.direction;
            this.layout = opts.layout || 'stack';
            this.layoutDelegate = opts.layoutDelegate || new (0, $2ac4508142683dcb$exports.DOMLayoutDelegate)(opts.ref);
        } else {
            this.collection = args[0];
            this.disabledKeys = args[1];
            this.ref = args[2];
            this.collator = args[3];
            this.layout = 'stack';
            this.orientation = 'vertical';
            this.disabledBehavior = 'all';
            this.layoutDelegate = new (0, $2ac4508142683dcb$exports.DOMLayoutDelegate)(this.ref);
        }
        // If this is a vertical stack, remove the left/right methods completely
        // so they aren't called by useDroppableCollection.
        if (this.layout === 'stack' && this.orientation === 'vertical') {
            this.getKeyLeftOf = undefined;
            this.getKeyRightOf = undefined;
        }
    }
} //# sourceMappingURL=ListKeyboardDelegate.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/useSelectableList.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $b6837c2f80a3c32f$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/useSelectableCollection.main.js [app-ssr] (ecmascript)");
var $836f880b12dcae5c$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/ListKeyboardDelegate.main.js [app-ssr] (ecmascript)");
var $lm2JY$reactariai18n = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-aria/i18n/dist/main.js [app-ssr] (ecmascript)");
var $lm2JY$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useSelectableList", ()=>$bd230acee196f50c$export$b95089534ab7c1fd);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $bd230acee196f50c$export$b95089534ab7c1fd(props) {
    let { selectionManager: selectionManager, collection: collection, disabledKeys: disabledKeys, ref: ref, keyboardDelegate: keyboardDelegate, layoutDelegate: layoutDelegate } = props;
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let collator = (0, $lm2JY$reactariai18n.useCollator)({
        usage: 'search',
        sensitivity: 'base'
    });
    let disabledBehavior = selectionManager.disabledBehavior;
    let delegate = (0, $lm2JY$react.useMemo)(()=>keyboardDelegate || new (0, $836f880b12dcae5c$exports.ListKeyboardDelegate)({
            collection: collection,
            disabledKeys: disabledKeys,
            disabledBehavior: disabledBehavior,
            ref: ref,
            collator: collator,
            layoutDelegate: layoutDelegate
        }), [
        keyboardDelegate,
        layoutDelegate,
        collection,
        disabledKeys,
        ref,
        collator,
        disabledBehavior
    ]);
    let { collectionProps: collectionProps } = (0, $b6837c2f80a3c32f$exports.useSelectableCollection)({
        ...props,
        ref: ref,
        selectionManager: selectionManager,
        keyboardDelegate: delegate
    });
    return {
        listProps: collectionProps
    };
} //# sourceMappingURL=useSelectableList.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $b6837c2f80a3c32f$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/useSelectableCollection.main.js [app-ssr] (ecmascript)");
var $433b1145b0781e10$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/useSelectableItem.main.js [app-ssr] (ecmascript)");
var $bd230acee196f50c$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/useSelectableList.main.js [app-ssr] (ecmascript)");
var $836f880b12dcae5c$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/ListKeyboardDelegate.main.js [app-ssr] (ecmascript)");
var $2ac4508142683dcb$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/DOMLayoutDelegate.main.js [app-ssr] (ecmascript)");
var $a1189052f36475e8$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/useTypeSelect.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useSelectableCollection", ()=>$b6837c2f80a3c32f$exports.useSelectableCollection);
$parcel$export(module.exports, "useSelectableItem", ()=>$433b1145b0781e10$exports.useSelectableItem);
$parcel$export(module.exports, "useSelectableList", ()=>$bd230acee196f50c$exports.useSelectableList);
$parcel$export(module.exports, "ListKeyboardDelegate", ()=>$836f880b12dcae5c$exports.ListKeyboardDelegate);
$parcel$export(module.exports, "DOMLayoutDelegate", ()=>$2ac4508142683dcb$exports.DOMLayoutDelegate);
$parcel$export(module.exports, "useTypeSelect", ()=>$a1189052f36475e8$exports.useTypeSelect); /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */  //# sourceMappingURL=main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/label/dist/useLabel.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $eXjoL$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/label/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useLabel", ()=>$ce7359c25a7dec1c$export$8467354a121f1b9f);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $ce7359c25a7dec1c$export$8467354a121f1b9f(props) {
    let { id: id, label: label, 'aria-labelledby': ariaLabelledby, 'aria-label': ariaLabel, labelElementType: labelElementType = 'label' } = props;
    id = (0, $eXjoL$reactariautils.useId)(id);
    let labelId = (0, $eXjoL$reactariautils.useId)();
    let labelProps = {};
    if (label) {
        ariaLabelledby = ariaLabelledby ? `${labelId} ${ariaLabelledby}` : labelId;
        labelProps = {
            id: labelId,
            htmlFor: labelElementType === 'label' ? id : undefined
        };
    } else if (!ariaLabelledby && !ariaLabel && ("TURBOPACK compile-time value", "development") !== 'production') console.warn('If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility');
    let fieldProps = (0, $eXjoL$reactariautils.useLabels)({
        id: id,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps
    };
} //# sourceMappingURL=useLabel.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/label/dist/useField.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ce7359c25a7dec1c$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/label/dist/useLabel.main.js [app-ssr] (ecmascript)");
var $iujgQ$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/label/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useField", ()=>$50e2f39368b9c636$export$294aa081a6c6f55d);
/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $50e2f39368b9c636$export$294aa081a6c6f55d(props) {
    let { description: description, errorMessage: errorMessage, isInvalid: isInvalid, validationState: validationState } = props;
    let { labelProps: labelProps, fieldProps: fieldProps } = (0, $ce7359c25a7dec1c$exports.useLabel)(props);
    let descriptionId = (0, $iujgQ$reactariautils.useSlotId)([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    let errorMessageId = (0, $iujgQ$reactariautils.useSlotId)([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    fieldProps = (0, $iujgQ$reactariautils.mergeProps)(fieldProps, {
        'aria-describedby': [
            descriptionId,
            // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
            errorMessageId,
            props['aria-describedby']
        ].filter(Boolean).join(' ') || undefined
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps,
        descriptionProps: {
            id: descriptionId
        },
        errorMessageProps: {
            id: errorMessageId
        }
    };
} //# sourceMappingURL=useField.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/label/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $50e2f39368b9c636$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/label/dist/useField.main.js [app-ssr] (ecmascript)");
var $ce7359c25a7dec1c$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/label/dist/useLabel.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useField", ()=>$50e2f39368b9c636$exports.useField);
$parcel$export(module.exports, "useLabel", ()=>$ce7359c25a7dec1c$exports.useLabel); /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */  //# sourceMappingURL=main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/form/dist/useFormValidation.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $j3sn1$reactariainteractions = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/form/node_modules/@react-aria/interactions/dist/main.js [app-ssr] (ecmascript)");
var $j3sn1$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $j3sn1$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useFormValidation", ()=>$9da8e3f192aba981$export$b8473d3665f3a75a);
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $9da8e3f192aba981$export$b8473d3665f3a75a(props, state, ref) {
    let { validationBehavior: validationBehavior, focus: focus } = props;
    // This is a useLayoutEffect so that it runs before the useEffect in useFormValidationState, which commits the validation change.
    (0, $j3sn1$reactariautils.useLayoutEffect)(()=>{
        if (validationBehavior === 'native' && (ref === null || ref === void 0 ? void 0 : ref.current) && !ref.current.disabled) {
            let errorMessage = state.realtimeValidation.isInvalid ? state.realtimeValidation.validationErrors.join(' ') || 'Invalid value.' : '';
            ref.current.setCustomValidity(errorMessage);
            // Prevent default tooltip for validation message.
            // https://bugzilla.mozilla.org/show_bug.cgi?id=605277
            if (!ref.current.hasAttribute('title')) ref.current.title = '';
            if (!state.realtimeValidation.isInvalid) state.updateValidation($9da8e3f192aba981$var$getNativeValidity(ref.current));
        }
    });
    let isIgnoredReset = (0, $j3sn1$react.useRef)(false);
    let onReset = (0, $j3sn1$reactariautils.useEffectEvent)(()=>{
        if (!isIgnoredReset.current) state.resetValidation();
    });
    let onInvalid = (0, $j3sn1$reactariautils.useEffectEvent)((e)=>{
        var _ref_current;
        // Only commit validation if we are not already displaying one.
        // This avoids clearing server errors that the user didn't actually fix.
        if (!state.displayValidation.isInvalid) state.commitValidation();
        // Auto focus the first invalid input in a form, unless the error already had its default prevented.
        let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
        if (!e.defaultPrevented && ref && form && $9da8e3f192aba981$var$getFirstInvalidInput(form) === ref.current) {
            var _ref_current1;
            if (focus) focus();
            else (_ref_current1 = ref.current) === null || _ref_current1 === void 0 ? void 0 : _ref_current1.focus();
            // Always show focus ring.
            (0, $j3sn1$reactariainteractions.setInteractionModality)('keyboard');
        }
        // Prevent default browser error UI from appearing.
        e.preventDefault();
    });
    let onChange = (0, $j3sn1$reactariautils.useEffectEvent)(()=>{
        state.commitValidation();
    });
    (0, $j3sn1$react.useEffect)(()=>{
        let input = ref === null || ref === void 0 ? void 0 : ref.current;
        if (!input) return;
        let form = input.form;
        let reset = form === null || form === void 0 ? void 0 : form.reset;
        if (form) // validation errors that are returned by server actions.
        // To do this, we ignore programmatic form resets that occur outside a user event.
        // This is best-effort. There may be false positives, e.g. setTimeout.
        form.reset = ()=>{
            // React uses MessageChannel for scheduling, so ignore 'message' events.
            isIgnoredReset.current = !window.event || window.event.type === 'message' && window.event.target instanceof MessagePort;
            reset === null || reset === void 0 ? void 0 : reset.call(form);
            isIgnoredReset.current = false;
        };
        input.addEventListener('invalid', onInvalid);
        input.addEventListener('change', onChange);
        form === null || form === void 0 ? void 0 : form.addEventListener('reset', onReset);
        return ()=>{
            input.removeEventListener('invalid', onInvalid);
            input.removeEventListener('change', onChange);
            form === null || form === void 0 ? void 0 : form.removeEventListener('reset', onReset);
            if (form) form.reset = reset;
        };
    }, [
        ref,
        onInvalid,
        onChange,
        onReset,
        validationBehavior
    ]);
}
function $9da8e3f192aba981$var$getValidity(input) {
    // The native ValidityState object is live, meaning each property is a getter that returns the current state.
    // We need to create a snapshot of the validity state at the time this function is called to avoid unpredictable React renders.
    let validity = input.validity;
    return {
        badInput: validity.badInput,
        customError: validity.customError,
        patternMismatch: validity.patternMismatch,
        rangeOverflow: validity.rangeOverflow,
        rangeUnderflow: validity.rangeUnderflow,
        stepMismatch: validity.stepMismatch,
        tooLong: validity.tooLong,
        tooShort: validity.tooShort,
        typeMismatch: validity.typeMismatch,
        valueMissing: validity.valueMissing,
        valid: validity.valid
    };
}
function $9da8e3f192aba981$var$getNativeValidity(input) {
    return {
        isInvalid: !input.validity.valid,
        validationDetails: $9da8e3f192aba981$var$getValidity(input),
        validationErrors: input.validationMessage ? [
            input.validationMessage
        ] : []
    };
}
function $9da8e3f192aba981$var$getFirstInvalidInput(form) {
    for(let i = 0; i < form.elements.length; i++){
        let element = form.elements[i];
        if (!element.validity.valid) return element;
    }
    return null;
} //# sourceMappingURL=useFormValidation.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/form/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $9da8e3f192aba981$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/form/dist/useFormValidation.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useFormValidation", ()=>$9da8e3f192aba981$exports.useFormValidation); /*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */  //# sourceMappingURL=main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/textfield/dist/useTextField.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $4Z7CR$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $4Z7CR$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $4Z7CR$reactstatelyutils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)");
var $4Z7CR$reactarialabel = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/label/dist/main.js [app-ssr] (ecmascript)");
var $4Z7CR$reactariafocus = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/focus/dist/main.js [app-ssr] (ecmascript)");
var $4Z7CR$reactariaform = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/form/dist/main.js [app-ssr] (ecmascript)");
var $4Z7CR$reactstatelyform = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/form/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useTextField", ()=>$9076f978e02df845$export$712718f7aec83d5);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $9076f978e02df845$export$712718f7aec83d5(props, ref) {
    let { inputElementType: inputElementType = 'input', isDisabled: isDisabled = false, isRequired: isRequired = false, isReadOnly: isReadOnly = false, type: type = 'text', validationBehavior: validationBehavior = 'aria' } = props;
    let [value, setValue] = (0, $4Z7CR$reactstatelyutils.useControlledState)(props.value, props.defaultValue || '', props.onChange);
    let { focusableProps: focusableProps } = (0, $4Z7CR$reactariafocus.useFocusable)(props, ref);
    let validationState = (0, $4Z7CR$reactstatelyform.useFormValidationState)({
        ...props,
        value: value
    });
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = validationState.displayValidation;
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $4Z7CR$reactarialabel.useField)({
        ...props,
        isInvalid: isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let domProps = (0, $4Z7CR$reactariautils.filterDOMProps)(props, {
        labelable: true
    });
    const inputOnlyProps = {
        type: type,
        pattern: props.pattern
    };
    (0, $4Z7CR$reactariautils.useFormReset)(ref, value, setValue);
    (0, $4Z7CR$reactariaform.useFormValidation)(props, validationState, ref);
    (0, $4Z7CR$react.useEffect)(()=>{
        // This works around a React/Chrome bug that prevents textarea elements from validating when controlled.
        // We prevent React from updating defaultValue (i.e. children) of textarea when `value` changes,
        // which causes Chrome to skip validation. Only updating `value` is ok in our case since our
        // textareas are always controlled. React is planning on removing this synchronization in a
        // future major version.
        // https://github.com/facebook/react/issues/19474
        // https://github.com/facebook/react/issues/11896
        if (ref.current instanceof (0, $4Z7CR$reactariautils.getOwnerWindow)(ref.current).HTMLTextAreaElement) {
            let input = ref.current;
            Object.defineProperty(input, 'defaultValue', {
                get: ()=>input.value,
                set: ()=>{},
                configurable: true
            });
        }
    }, [
        ref
    ]);
    return {
        labelProps: labelProps,
        inputProps: (0, $4Z7CR$reactariautils.mergeProps)(domProps, inputElementType === 'input' && inputOnlyProps, {
            disabled: isDisabled,
            readOnly: isReadOnly,
            required: isRequired && validationBehavior === 'native',
            'aria-required': isRequired && validationBehavior === 'aria' || undefined,
            'aria-invalid': isInvalid || undefined,
            'aria-errormessage': props['aria-errormessage'],
            'aria-activedescendant': props['aria-activedescendant'],
            'aria-autocomplete': props['aria-autocomplete'],
            'aria-haspopup': props['aria-haspopup'],
            value: value,
            onChange: (e)=>setValue(e.target.value),
            autoComplete: props.autoComplete,
            autoCapitalize: props.autoCapitalize,
            maxLength: props.maxLength,
            minLength: props.minLength,
            name: props.name,
            placeholder: props.placeholder,
            inputMode: props.inputMode,
            // Clipboard events
            onCopy: props.onCopy,
            onCut: props.onCut,
            onPaste: props.onPaste,
            // Composition events
            onCompositionEnd: props.onCompositionEnd,
            onCompositionStart: props.onCompositionStart,
            onCompositionUpdate: props.onCompositionUpdate,
            // Selection events
            onSelect: props.onSelect,
            // Input events
            onBeforeInput: props.onBeforeInput,
            onInput: props.onInput,
            ...focusableProps,
            ...fieldProps
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
} //# sourceMappingURL=useTextField.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/textfield/dist/useFormattedTextField.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $9076f978e02df845$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/textfield/dist/useTextField.main.js [app-ssr] (ecmascript)");
var $6PuoT$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $6PuoT$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useFormattedTextField", ()=>$56b68c3dab9bf16c$export$4f384c9210e583c3);
/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $56b68c3dab9bf16c$var$supportsNativeBeforeInputEvent() {
    return ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.InputEvent && // @ts-ignore
    typeof InputEvent.prototype.getTargetRanges === 'function';
}
function $56b68c3dab9bf16c$export$4f384c9210e583c3(props, state, inputRef) {
    // All browsers implement the 'beforeinput' event natively except Firefox
    // (currently behind a flag as of Firefox 84). React's polyfill does not
    // run in all cases that the native event fires, e.g. when deleting text.
    // Use the native event if available so that we can prevent invalid deletions.
    // We do not attempt to polyfill this in Firefox since it would be very complicated,
    // the benefit of doing so is fairly minor, and it's going to be natively supported soon.
    let onBeforeInputFallback = (0, $6PuoT$reactariautils.useEffectEvent)((e)=>{
        let input = inputRef.current;
        // Compute the next value of the input if the event is allowed to proceed.
        // See https://www.w3.org/TR/input-events-2/#interface-InputEvent-Attributes for a full list of input types.
        let nextValue;
        switch(e.inputType){
            case 'historyUndo':
            case 'historyRedo':
                // Explicitly allow undo/redo. e.data is null in this case, but there's no need to validate,
                // because presumably the input would have already been validated previously.
                return;
            case 'insertLineBreak':
                // Explicitly allow "insertLineBreak" event, to allow onSubmit for "enter" key. e.data is null in this case.
                return;
            case 'deleteContent':
            case 'deleteByCut':
            case 'deleteByDrag':
                nextValue = input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
                break;
            case 'deleteContentForward':
                // This is potentially incorrect, since the browser may actually delete more than a single UTF-16
                // character. In reality, a full Unicode grapheme cluster consisting of multiple UTF-16 characters
                // or code points may be deleted. However, in our currently supported locales, there are no such cases.
                // If we support additional locales in the future, this may need to change.
                nextValue = input.selectionEnd === input.selectionStart ? input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd + 1) : input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
                break;
            case 'deleteContentBackward':
                nextValue = input.selectionEnd === input.selectionStart ? input.value.slice(0, input.selectionStart - 1) + input.value.slice(input.selectionStart) : input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
                break;
            case 'deleteSoftLineBackward':
            case 'deleteHardLineBackward':
                nextValue = input.value.slice(input.selectionStart);
                break;
            default:
                if (e.data != null) nextValue = input.value.slice(0, input.selectionStart) + e.data + input.value.slice(input.selectionEnd);
                break;
        }
        // If we did not compute a value, or the new value is invalid, prevent the event
        // so that the browser does not update the input text, move the selection, or add to
        // the undo/redo stack.
        if (nextValue == null || !state.validate(nextValue)) e.preventDefault();
    });
    (0, $6PuoT$react.useEffect)(()=>{
        if (!$56b68c3dab9bf16c$var$supportsNativeBeforeInputEvent()) return;
        //TURBOPACK unreachable
        ;
        let input;
    }, [
        inputRef,
        onBeforeInputFallback
    ]);
    let onBeforeInput = !$56b68c3dab9bf16c$var$supportsNativeBeforeInputEvent() ? (e)=>{
        let nextValue = e.target.value.slice(0, e.target.selectionStart) + e.data + e.target.value.slice(e.target.selectionEnd);
        if (!state.validate(nextValue)) e.preventDefault();
    } : "TURBOPACK unreachable";
    let { labelProps: labelProps, inputProps: textFieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = (0, $9076f978e02df845$exports.useTextField)(props, inputRef);
    let compositionStartState = (0, $6PuoT$react.useRef)(null);
    return {
        inputProps: (0, $6PuoT$reactariautils.mergeProps)(textFieldProps, {
            onBeforeInput: onBeforeInput,
            onCompositionStart () {
                // Chrome does not implement Input Events Level 2, which specifies the insertFromComposition
                // and deleteByComposition inputType values for the beforeinput event. These are meant to occur
                // at the end of a composition (e.g. Pinyin IME, Android auto correct, etc.), and crucially, are
                // cancelable. The insertCompositionText and deleteCompositionText input types are not cancelable,
                // nor would we want to cancel them because the input from the user is incomplete at that point.
                // In Safari, insertFromComposition/deleteFromComposition will fire, however, allowing us to cancel
                // the final composition result if it is invalid. As a fallback for Chrome and Firefox, which either
                // don't support Input Events Level 2, or beforeinput at all, we store the state of the input when
                // the compositionstart event fires, and undo the changes in compositionend (below) if it is invalid.
                // Unfortunately, this messes up the undo/redo stack, but until insertFromComposition/deleteByComposition
                // are implemented, there is no other way to prevent composed input.
                // See https://bugs.chromium.org/p/chromium/issues/detail?id=1022204
                let { value: value, selectionStart: selectionStart, selectionEnd: selectionEnd } = inputRef.current;
                compositionStartState.current = {
                    value: value,
                    selectionStart: selectionStart,
                    selectionEnd: selectionEnd
                };
            },
            onCompositionEnd () {
                if (!state.validate(inputRef.current.value)) {
                    // Restore the input value in the DOM immediately so we can synchronously update the selection position.
                    // But also update the value in React state as well so it is correct for future updates.
                    let { value: value, selectionStart: selectionStart, selectionEnd: selectionEnd } = compositionStartState.current;
                    inputRef.current.value = value;
                    inputRef.current.setSelectionRange(selectionStart, selectionEnd);
                    state.setInputValue(value);
                }
            }
        }),
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        ...validation
    };
} //# sourceMappingURL=useFormattedTextField.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/textfield/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $9076f978e02df845$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/textfield/dist/useTextField.main.js [app-ssr] (ecmascript)");
var $56b68c3dab9bf16c$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/textfield/dist/useFormattedTextField.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useTextField", ()=>$9076f978e02df845$exports.useTextField);
$parcel$export(module.exports, "useFormattedTextField", ()=>$56b68c3dab9bf16c$exports.useFormattedTextField); /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */  //# sourceMappingURL=main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/ar-AE.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `\u{627}\u{636}\u{63A}\u{637} \u{645}\u{637}\u{648}\u{644}\u{627}\u{64B} \u{623}\u{648} \u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} Alt + \u{627}\u{644}\u{633}\u{647}\u{645} \u{644}\u{623}\u{633}\u{641}\u{644} \u{644}\u{641}\u{62A}\u{62D} \u{627}\u{644}\u{642}\u{627}\u{626}\u{645}\u{629}`
}; //# sourceMappingURL=ar-AE.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/bg-BG.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{43F}\u{440}\u{43E}\u{434}\u{44A}\u{43B}\u{436}\u{438}\u{442}\u{435}\u{43B}\u{43D}\u{43E} \u{438}\u{43B}\u{438} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} Alt+ \u{441}\u{442}\u{440}\u{435}\u{43B}\u{43A}\u{430} \u{43D}\u{430}\u{434}\u{43E}\u{43B}\u{443}, \u{437}\u{430} \u{434}\u{430} \u{43E}\u{442}\u{432}\u{43E}\u{440}\u{438}\u{442}\u{435} \u{43C}\u{435}\u{43D}\u{44E}\u{442}\u{43E}`
}; //# sourceMappingURL=bg-BG.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/cs-CZ.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `Dlouh\xfdm stiskem nebo stisknut\xedm kl\xe1ves Alt + \u{161}ipka dol\u{16F} otev\u{159}ete nab\xeddku`
}; //# sourceMappingURL=cs-CZ.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/da-DK.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `Langt tryk eller tryk p\xe5 Alt + pil ned for at \xe5bne menuen`
}; //# sourceMappingURL=da-DK.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/de-DE.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `Dr\xfccken Sie lange oder dr\xfccken Sie Alt + Nach-unten, um das Men\xfc zu \xf6ffnen`
}; //# sourceMappingURL=de-DE.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/el-GR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `\u{3A0}\u{3B9}\u{3AD}\u{3C3}\u{3C4}\u{3B5} \u{3C0}\u{3B1}\u{3C1}\u{3B1}\u{3C4}\u{3B5}\u{3C4}\u{3B1}\u{3BC}\u{3AD}\u{3BD}\u{3B1} \u{3AE} \u{3C0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Alt + \u{3BA}\u{3AC}\u{3C4}\u{3C9} \u{3B2}\u{3AD}\u{3BB}\u{3BF}\u{3C2} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3B1}\u{3BD}\u{3BF}\u{3AF}\u{3BE}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3BF} \u{3BC}\u{3B5}\u{3BD}\u{3BF}\u{3CD}`
}; //# sourceMappingURL=el-GR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/en-US.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `Long press or press Alt + ArrowDown to open menu`
}; //# sourceMappingURL=en-US.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/es-ES.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `Mantenga pulsado o pulse Alt + flecha abajo para abrir el men\xfa`
}; //# sourceMappingURL=es-ES.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/et-EE.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `Men\xfc\xfc avamiseks vajutage pikalt v\xf5i vajutage klahve Alt + allanool`
}; //# sourceMappingURL=et-EE.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/fi-FI.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `Avaa valikko painamalla pohjassa tai n\xe4pp\xe4inyhdistelm\xe4ll\xe4 Alt + Alanuoli`
}; //# sourceMappingURL=fi-FI.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/fr-FR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `Appuyez de mani\xe8re prolong\xe9e ou appuyez sur Alt\xa0+\xa0Fl\xe8che vers le bas pour ouvrir le menu.`
}; //# sourceMappingURL=fr-FR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/he-IL.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `\u{5DC}\u{5D7}\u{5E5} \u{5DC}\u{5D7}\u{5D9}\u{5E6}\u{5D4} \u{5D0}\u{5E8}\u{5D5}\u{5DB}\u{5D4} \u{5D0}\u{5D5} \u{5D4}\u{5E7}\u{5E9} Alt + ArrowDown \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E4}\u{5EA}\u{5D5}\u{5D7} \u{5D0}\u{5EA} \u{5D4}\u{5EA}\u{5E4}\u{5E8}\u{5D9}\u{5D8}`
}; //# sourceMappingURL=he-IL.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/hr-HR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika`
}; //# sourceMappingURL=hr-HR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/hu-HU.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `Nyomja meg hosszan, vagy nyomja meg az Alt + lefele ny\xedl gombot a men\xfc megnyit\xe1s\xe1hoz`
}; //# sourceMappingURL=hu-HU.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/it-IT.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `Premere a lungo o premere Alt + Freccia gi\xf9 per aprire il menu`
}; //# sourceMappingURL=it-IT.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/ja-JP.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `\u{9577}\u{62BC}\u{3057}\u{307E}\u{305F}\u{306F} Alt+\u{4E0B}\u{77E2}\u{5370}\u{30AD}\u{30FC}\u{3067}\u{30E1}\u{30CB}\u{30E5}\u{30FC}\u{3092}\u{958B}\u{304F}`
}; //# sourceMappingURL=ja-JP.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/ko-KR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `\u{AE38}\u{AC8C} \u{B204}\u{B974}\u{AC70}\u{B098} Alt + \u{C544}\u{B798}\u{CABD} \u{D654}\u{C0B4}\u{D45C}\u{B97C} \u{B20C}\u{B7EC} \u{BA54}\u{B274} \u{C5F4}\u{AE30}`
}; //# sourceMappingURL=ko-KR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/lt-LT.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `Nor\u{117}dami atidaryti meniu, nuspaud\u{119} palaikykite arba paspauskite \u{201E}Alt + ArrowDown\u{201C}.`
}; //# sourceMappingURL=lt-LT.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/lv-LV.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `Lai atv\u{113}rtu izv\u{113}lni, turiet nospiestu vai nospiediet tausti\u{146}u kombin\u{101}ciju Alt + lejupv\u{113}rst\u{101} bulti\u{146}a`
}; //# sourceMappingURL=lv-LV.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/nb-NO.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `Langt trykk eller trykk Alt + PilNed for \xe5 \xe5pne menyen`
}; //# sourceMappingURL=nb-NO.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/nl-NL.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen`
}; //# sourceMappingURL=nl-NL.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/pl-PL.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `Naci\u{15B}nij i przytrzymaj lub naci\u{15B}nij klawisze Alt + Strza\u{142}ka w d\xf3\u{142}, aby otworzy\u{107} menu`
}; //# sourceMappingURL=pl-PL.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/pt-BR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu`
}; //# sourceMappingURL=pt-BR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/pt-PT.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu`
}; //# sourceMappingURL=pt-PT.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/ro-RO.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `Ap\u{103}sa\u{21B}i lung sau ap\u{103}sa\u{21B}i pe Alt + s\u{103}geat\u{103} \xeen jos pentru a deschide meniul`
}; //# sourceMappingURL=ro-RO.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/ru-RU.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{438} \u{443}\u{434}\u{435}\u{440}\u{436}\u{438}\u{432}\u{430}\u{439}\u{442}\u{435} \u{438}\u{43B}\u{438} \u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} Alt + \u{421}\u{442}\u{440}\u{435}\u{43B}\u{43A}\u{430} \u{432}\u{43D}\u{438}\u{437}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43E}\u{442}\u{43A}\u{440}\u{44B}\u{442}\u{44C} \u{43C}\u{435}\u{43D}\u{44E}`
}; //# sourceMappingURL=ru-RU.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/sk-SK.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `Ponuku otvor\xedte dlh\xfdm stla\u{10D}en\xedm alebo stla\u{10D}en\xedm kl\xe1vesu Alt + kl\xe1vesu so \u{161}\xedpkou nadol`
}; //# sourceMappingURL=sk-SK.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/sl-SI.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `Za odprtje menija pritisnite in dr\u{17E}ite gumb ali pritisnite Alt+pu\u{161}\u{10D}ica navzdol`
}; //# sourceMappingURL=sl-SI.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/sr-SP.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni`
}; //# sourceMappingURL=sr-SP.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/sv-SE.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `H\xe5ll nedtryckt eller tryck p\xe5 Alt + pil ned\xe5t f\xf6r att \xf6ppna menyn`
}; //# sourceMappingURL=sv-SE.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/tr-TR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `Men\xfcy\xfc a\xe7mak i\xe7in uzun bas\u{131}n veya Alt + A\u{15F}a\u{11F}\u{131} Ok tu\u{15F}una bas\u{131}n`
}; //# sourceMappingURL=tr-TR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/uk-UA.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `\u{414}\u{43E}\u{432}\u{433}\u{43E} \u{430}\u{431}\u{43E} \u{437}\u{432}\u{438}\u{447}\u{430}\u{439}\u{43D}\u{43E} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} \u{43A}\u{43E}\u{43C}\u{431}\u{456}\u{43D}\u{430}\u{446}\u{456}\u{44E} \u{43A}\u{43B}\u{430}\u{432}\u{456}\u{448} Alt \u{456} \u{441}\u{442}\u{440}\u{456}\u{43B}\u{43A}\u{430} \u{432}\u{43D}\u{438}\u{437}, \u{449}\u{43E}\u{431} \u{432}\u{456}\u{434}\u{43A}\u{440}\u{438}\u{442}\u{438} \u{43C}\u{435}\u{43D}\u{44E}`
}; //# sourceMappingURL=uk-UA.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/zh-CN.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `\u{957F}\u{6309}\u{6216}\u{6309} Alt + \u{5411}\u{4E0B}\u{65B9}\u{5411}\u{952E}\u{4EE5}\u{6253}\u{5F00}\u{83DC}\u{5355}`
}; //# sourceMappingURL=zh-CN.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/zh-TW.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "longPressMessage": `\u{9577}\u{6309}\u{6216}\u{6309} Alt+\u{5411}\u{4E0B}\u{9375}\u{4EE5}\u{958B}\u{555F}\u{529F}\u{80FD}\u{8868}`
}; //# sourceMappingURL=zh-TW.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/intlStrings.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $429891642bf97c51$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/ar-AE.main.js [app-ssr] (ecmascript)");
var $40d90b799072e111$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/bg-BG.main.js [app-ssr] (ecmascript)");
var $587b89d60e4f3e24$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/cs-CZ.main.js [app-ssr] (ecmascript)");
var $79eb8045886465e9$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/da-DK.main.js [app-ssr] (ecmascript)");
var $9c6faa2088d34bf1$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/de-DE.main.js [app-ssr] (ecmascript)");
var $ee6e1292c61a8135$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/el-GR.main.js [app-ssr] (ecmascript)");
var $f479187898d153cc$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/en-US.main.js [app-ssr] (ecmascript)");
var $1e6a91f77efbb11f$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/es-ES.main.js [app-ssr] (ecmascript)");
var $f2fb75e964082636$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/et-EE.main.js [app-ssr] (ecmascript)");
var $75cc65c4b616fac1$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/fi-FI.main.js [app-ssr] (ecmascript)");
var $82a179939aabd1ee$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/fr-FR.main.js [app-ssr] (ecmascript)");
var $40aa37345f1f8748$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/he-IL.main.js [app-ssr] (ecmascript)");
var $c00088e5c377e2c5$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/hr-HR.main.js [app-ssr] (ecmascript)");
var $51f736a409b7d295$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/hu-HU.main.js [app-ssr] (ecmascript)");
var $65bb74747bd8f2fb$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/it-IT.main.js [app-ssr] (ecmascript)");
var $1bc11da108727c27$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/ja-JP.main.js [app-ssr] (ecmascript)");
var $118d77e4be898c17$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/ko-KR.main.js [app-ssr] (ecmascript)");
var $4db9ebadbf792309$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/lt-LT.main.js [app-ssr] (ecmascript)");
var $51288b53bc93ac3d$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/lv-LV.main.js [app-ssr] (ecmascript)");
var $1a4b31206cd66e98$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/nb-NO.main.js [app-ssr] (ecmascript)");
var $21e944c6af0b8453$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/nl-NL.main.js [app-ssr] (ecmascript)");
var $20509ccafe6fe6aa$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/pl-PL.main.js [app-ssr] (ecmascript)");
var $8006eac1d5d4665b$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/pt-BR.main.js [app-ssr] (ecmascript)");
var $4875d1b529941a0a$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/pt-PT.main.js [app-ssr] (ecmascript)");
var $37939d04a40a865b$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/ro-RO.main.js [app-ssr] (ecmascript)");
var $fd1c8a4521d30c69$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/ru-RU.main.js [app-ssr] (ecmascript)");
var $2940d0a4ba6cbd64$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/sk-SK.main.js [app-ssr] (ecmascript)");
var $cb481a56d5c8fa56$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/sl-SI.main.js [app-ssr] (ecmascript)");
var $ecbdeaa2c85d1b32$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/sr-SP.main.js [app-ssr] (ecmascript)");
var $aeca4735c8d1bab6$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/sv-SE.main.js [app-ssr] (ecmascript)");
var $68243426be5c9f01$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/tr-TR.main.js [app-ssr] (ecmascript)");
var $bde63de8df74e87d$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/uk-UA.main.js [app-ssr] (ecmascript)");
var $2d16ab23cbf254d4$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/zh-CN.main.js [app-ssr] (ecmascript)");
var $bd9ff3a1da9d944a$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/zh-TW.main.js [app-ssr] (ecmascript)");
module.exports = {
    "ar-AE": $429891642bf97c51$exports,
    "bg-BG": $40d90b799072e111$exports,
    "cs-CZ": $587b89d60e4f3e24$exports,
    "da-DK": $79eb8045886465e9$exports,
    "de-DE": $9c6faa2088d34bf1$exports,
    "el-GR": $ee6e1292c61a8135$exports,
    "en-US": $f479187898d153cc$exports,
    "es-ES": $1e6a91f77efbb11f$exports,
    "et-EE": $f2fb75e964082636$exports,
    "fi-FI": $75cc65c4b616fac1$exports,
    "fr-FR": $82a179939aabd1ee$exports,
    "he-IL": $40aa37345f1f8748$exports,
    "hr-HR": $c00088e5c377e2c5$exports,
    "hu-HU": $51f736a409b7d295$exports,
    "it-IT": $65bb74747bd8f2fb$exports,
    "ja-JP": $1bc11da108727c27$exports,
    "ko-KR": $118d77e4be898c17$exports,
    "lt-LT": $4db9ebadbf792309$exports,
    "lv-LV": $51288b53bc93ac3d$exports,
    "nb-NO": $1a4b31206cd66e98$exports,
    "nl-NL": $21e944c6af0b8453$exports,
    "pl-PL": $20509ccafe6fe6aa$exports,
    "pt-BR": $8006eac1d5d4665b$exports,
    "pt-PT": $4875d1b529941a0a$exports,
    "ro-RO": $37939d04a40a865b$exports,
    "ru-RU": $fd1c8a4521d30c69$exports,
    "sk-SK": $2940d0a4ba6cbd64$exports,
    "sl-SI": $cb481a56d5c8fa56$exports,
    "sr-SP": $ecbdeaa2c85d1b32$exports,
    "sv-SE": $aeca4735c8d1bab6$exports,
    "tr-TR": $68243426be5c9f01$exports,
    "uk-UA": $bde63de8df74e87d$exports,
    "zh-CN": $2d16ab23cbf254d4$exports,
    "zh-TW": $bd9ff3a1da9d944a$exports
}; //# sourceMappingURL=intlStrings.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/useMenuTrigger.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $d1742ec2644a0949$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/intlStrings.main.js [app-ssr] (ecmascript)");
var $jo7gW$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $jo7gW$reactariai18n = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/main.js [app-ssr] (ecmascript)");
var $jo7gW$reactariainteractions = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/node_modules/@react-aria/interactions/dist/main.js [app-ssr] (ecmascript)");
var $jo7gW$reactariaoverlays = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/dist/main.js [app-ssr] (ecmascript)");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useMenuTrigger", ()=>$7211ab9328763fb9$export$dc9c12ed27dd1b49);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $7211ab9328763fb9$export$dc9c12ed27dd1b49(props, state, ref) {
    let { type: type = 'menu', isDisabled: isDisabled, trigger: trigger = 'press' } = props;
    let menuTriggerId = (0, $jo7gW$reactariautils.useId)();
    let { triggerProps: triggerProps, overlayProps: overlayProps } = (0, $jo7gW$reactariaoverlays.useOverlayTrigger)({
        type: type
    }, state, ref);
    let onKeyDown = (e)=>{
        if (isDisabled) return;
        if (trigger === 'longPress' && !e.altKey) return;
        if (ref && ref.current) switch(e.key){
            case 'Enter':
            case ' ':
                if (trigger === 'longPress') return;
            // fallthrough
            case 'ArrowDown':
                // Stop propagation, unless it would already be handled by useKeyboard.
                if (!('continuePropagation' in e)) e.stopPropagation();
                e.preventDefault();
                state.toggle('first');
                break;
            case 'ArrowUp':
                if (!('continuePropagation' in e)) e.stopPropagation();
                e.preventDefault();
                state.toggle('last');
                break;
            default:
                // Allow other keys.
                if ('continuePropagation' in e) e.continuePropagation();
        }
    };
    let stringFormatter = (0, $jo7gW$reactariai18n.useLocalizedStringFormatter)((0, $parcel$interopDefault($d1742ec2644a0949$exports)), '@react-aria/menu');
    let { longPressProps: longPressProps } = (0, $jo7gW$reactariainteractions.useLongPress)({
        isDisabled: isDisabled || trigger !== 'longPress',
        accessibilityDescription: stringFormatter.format('longPressMessage'),
        onLongPressStart () {
            state.close();
        },
        onLongPress () {
            state.open('first');
        }
    });
    let pressProps = {
        onPressStart (e) {
            // For consistency with native, open the menu on mouse/key down, but touch up.
            if (e.pointerType !== 'touch' && e.pointerType !== 'keyboard' && !isDisabled) // Otherwise, the menu itself will be focused.
            state.open(e.pointerType === 'virtual' ? 'first' : null);
        },
        onPress (e) {
            if (e.pointerType === 'touch' && !isDisabled) state.toggle();
        }
    };
    // omit onPress from triggerProps since we override it above.
    delete triggerProps.onPress;
    return {
        // @ts-ignore - TODO we pass out both DOMAttributes AND AriaButtonProps, but useButton will discard the longPress event handlers, it's only through PressResponder magic that this works for RSP and RAC. it does not work in aria examples
        menuTriggerProps: {
            ...triggerProps,
            ...trigger === 'press' ? pressProps : longPressProps,
            id: menuTriggerId,
            onKeyDown: onKeyDown
        },
        menuProps: {
            ...overlayProps,
            'aria-labelledby': menuTriggerId,
            autoFocus: state.focusStrategy || true,
            onClose: state.close
        }
    };
} //# sourceMappingURL=useMenuTrigger.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/useMenu.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $6CumN$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $6CumN$reactariaselection = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "menuData", ()=>$a3815f0132802737$export$6f49b4016bfc8d56);
$parcel$export(module.exports, "useMenu", ()=>$a3815f0132802737$export$38eaa17faae8f579);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $a3815f0132802737$export$6f49b4016bfc8d56 = new WeakMap();
function $a3815f0132802737$export$38eaa17faae8f579(props, state, ref) {
    let { shouldFocusWrap: shouldFocusWrap = true, onKeyDown: onKeyDown, onKeyUp: onKeyUp, ...otherProps } = props;
    if (!props['aria-label'] && !props['aria-labelledby']) console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    let domProps = (0, $6CumN$reactariautils.filterDOMProps)(props, {
        labelable: true
    });
    let { listProps: listProps } = (0, $6CumN$reactariaselection.useSelectableList)({
        ...otherProps,
        ref: ref,
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys,
        shouldFocusWrap: shouldFocusWrap,
        linkBehavior: 'override'
    });
    $a3815f0132802737$export$6f49b4016bfc8d56.set(state, {
        onClose: props.onClose,
        onAction: props.onAction
    });
    return {
        menuProps: (0, $6CumN$reactariautils.mergeProps)(domProps, {
            onKeyDown: onKeyDown,
            onKeyUp: onKeyUp
        }, {
            role: 'menu',
            ...listProps,
            onKeyDown: (e)=>{
                var _listProps_onKeyDown;
                // don't clear the menu selected keys if the user is presses escape since escape closes the menu
                if (e.key !== 'Escape') (_listProps_onKeyDown = listProps.onKeyDown) === null || _listProps_onKeyDown === void 0 ? void 0 : _listProps_onKeyDown.call(listProps, e);
            }
        })
    };
} //# sourceMappingURL=useMenu.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/useMenuItem.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $a3815f0132802737$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/useMenu.main.js [app-ssr] (ecmascript)");
var $byVdR$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $byVdR$reactstatelycollections = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/collections/dist/main.js [app-ssr] (ecmascript)");
var $byVdR$reactariainteractions = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/node_modules/@react-aria/interactions/dist/main.js [app-ssr] (ecmascript)");
var $byVdR$reactariaselection = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useMenuItem", ()=>$38191ed02615ec07$export$9d32628fc2aea7da);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $38191ed02615ec07$export$9d32628fc2aea7da(props, state, ref) {
    let { id: id, key: key, closeOnSelect: closeOnSelect, isVirtualized: isVirtualized, 'aria-haspopup': hasPopup, onPressStart: pressStartProp, onPressUp: pressUpProp, onPress: onPress, onPressChange: onPressChange, onPressEnd: onPressEnd, onHoverStart: hoverStartProp, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, onKeyDown: onKeyDown, onKeyUp: onKeyUp, onFocus: onFocus, onFocusChange: onFocusChange, onBlur: onBlur, selectionManager: selectionManager = state.selectionManager } = props;
    let isTrigger = !!hasPopup;
    let isTriggerExpanded = isTrigger && props['aria-expanded'] === 'true';
    var _props_isDisabled;
    let isDisabled = (_props_isDisabled = props.isDisabled) !== null && _props_isDisabled !== void 0 ? _props_isDisabled : selectionManager.isDisabled(key);
    var _props_isSelected;
    let isSelected = (_props_isSelected = props.isSelected) !== null && _props_isSelected !== void 0 ? _props_isSelected : selectionManager.isSelected(key);
    let data = (0, $a3815f0132802737$exports.menuData).get(state);
    let item = state.collection.getItem(key);
    let onClose = props.onClose || data.onClose;
    let router = (0, $byVdR$reactariautils.useRouter)();
    let performAction = (e)=>{
        var _item_props;
        if (isTrigger) return;
        if (item === null || item === void 0 ? void 0 : (_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.onAction) item.props.onAction();
        else if (props.onAction) props.onAction(key);
        if (data.onAction) {
            // Must reassign to variable otherwise `this` binding gets messed up. Something to do with WeakMap.
            let onAction = data.onAction;
            onAction(key);
        }
        if (e.target instanceof HTMLAnchorElement && item) router.open(e.target, e, item.props.href, item.props.routerOptions);
    };
    let role = 'menuitem';
    if (!isTrigger) {
        if (selectionManager.selectionMode === 'single') role = 'menuitemradio';
        else if (selectionManager.selectionMode === 'multiple') role = 'menuitemcheckbox';
    }
    let labelId = (0, $byVdR$reactariautils.useSlotId)();
    let descriptionId = (0, $byVdR$reactariautils.useSlotId)();
    let keyboardId = (0, $byVdR$reactariautils.useSlotId)();
    let ariaProps = {
        id: id,
        'aria-disabled': isDisabled || undefined,
        role: role,
        'aria-label': props['aria-label'],
        'aria-labelledby': labelId,
        'aria-describedby': [
            descriptionId,
            keyboardId
        ].filter(Boolean).join(' ') || undefined,
        'aria-controls': props['aria-controls'],
        'aria-haspopup': hasPopup,
        'aria-expanded': props['aria-expanded']
    };
    if (selectionManager.selectionMode !== 'none' && !isTrigger) ariaProps['aria-checked'] = isSelected;
    if (isVirtualized) {
        ariaProps['aria-posinset'] = item === null || item === void 0 ? void 0 : item.index;
        ariaProps['aria-setsize'] = (0, $byVdR$reactstatelycollections.getItemCount)(state.collection);
    }
    let onPressStart = (e)=>{
        if (e.pointerType === 'keyboard') performAction(e);
        pressStartProp === null || pressStartProp === void 0 ? void 0 : pressStartProp(e);
    };
    let onPressUp = (e)=>{
        if (e.pointerType !== 'keyboard') {
            performAction(e);
            // Pressing a menu item should close by default in single selection mode but not multiple
            // selection mode, except if overridden by the closeOnSelect prop.
            if (!isTrigger && onClose && (closeOnSelect !== null && closeOnSelect !== void 0 ? closeOnSelect : selectionManager.selectionMode !== 'multiple' || selectionManager.isLink(key))) onClose();
        }
        pressUpProp === null || pressUpProp === void 0 ? void 0 : pressUpProp(e);
    };
    let { itemProps: itemProps, isFocused: isFocused } = (0, $byVdR$reactariaselection.useSelectableItem)({
        selectionManager: selectionManager,
        key: key,
        ref: ref,
        shouldSelectOnPressUp: true,
        allowsDifferentPressOrigin: true,
        // Disable all handling of links in useSelectable item
        // because we handle it ourselves. The behavior of menus
        // is slightly different from other collections because
        // actions are performed on key down rather than key up.
        linkBehavior: 'none'
    });
    let { pressProps: pressProps, isPressed: isPressed } = (0, $byVdR$reactariainteractions.usePress)({
        onPressStart: onPressStart,
        onPress: onPress,
        onPressUp: onPressUp,
        onPressChange: onPressChange,
        onPressEnd: onPressEnd,
        isDisabled: isDisabled
    });
    let { hoverProps: hoverProps } = (0, $byVdR$reactariainteractions.useHover)({
        isDisabled: isDisabled,
        onHoverStart (e) {
            // Hovering over an already expanded sub dialog trigger should keep focus in the dialog.
            if (!(0, $byVdR$reactariainteractions.isFocusVisible)() && !(isTriggerExpanded && hasPopup === 'dialog')) {
                selectionManager.setFocused(true);
                selectionManager.setFocusedKey(key);
            }
            hoverStartProp === null || hoverStartProp === void 0 ? void 0 : hoverStartProp(e);
        },
        onHoverChange: onHoverChange,
        onHoverEnd: onHoverEnd
    });
    let { keyboardProps: keyboardProps } = (0, $byVdR$reactariainteractions.useKeyboard)({
        onKeyDown: (e)=>{
            // Ignore repeating events, which may have started on the menu trigger before moving
            // focus to the menu item. We want to wait for a second complete key press sequence.
            if (e.repeat) {
                e.continuePropagation();
                return;
            }
            switch(e.key){
                case ' ':
                    if (!isDisabled && selectionManager.selectionMode === 'none' && !isTrigger && closeOnSelect !== false && onClose) onClose();
                    break;
                case 'Enter':
                    // The Enter key should always close on select, except if overridden.
                    if (!isDisabled && closeOnSelect !== false && !isTrigger && onClose) onClose();
                    break;
                default:
                    if (!isTrigger) e.continuePropagation();
                    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
                    break;
            }
        },
        onKeyUp: onKeyUp
    });
    let { focusProps: focusProps } = (0, $byVdR$reactariainteractions.useFocus)({
        onBlur: onBlur,
        onFocus: onFocus,
        onFocusChange: onFocusChange
    });
    let domProps = (0, $byVdR$reactariautils.filterDOMProps)(item === null || item === void 0 ? void 0 : item.props);
    delete domProps.id;
    let linkProps = (0, $byVdR$reactariautils.useLinkProps)(item === null || item === void 0 ? void 0 : item.props);
    return {
        menuItemProps: {
            ...ariaProps,
            ...(0, $byVdR$reactariautils.mergeProps)(domProps, linkProps, isTrigger ? {
                onFocus: itemProps.onFocus,
                'data-key': itemProps['data-key']
            } : itemProps, pressProps, hoverProps, keyboardProps, focusProps),
            // If a submenu is expanded, set the tabIndex to -1 so that shift tabbing goes out of the menu instead of the parent menu item.
            tabIndex: itemProps.tabIndex != null && isTriggerExpanded ? -1 : itemProps.tabIndex
        },
        labelProps: {
            id: labelId
        },
        descriptionProps: {
            id: descriptionId
        },
        keyboardShortcutProps: {
            id: keyboardId
        },
        isFocused: isFocused,
        isSelected: isSelected,
        isPressed: isPressed,
        isDisabled: isDisabled
    };
} //# sourceMappingURL=useMenuItem.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/useMenuSection.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $c1jOQ$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useMenuSection", ()=>$63008655e23408c5$export$73f7a44322579622);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $63008655e23408c5$export$73f7a44322579622(props) {
    let { heading: heading, 'aria-label': ariaLabel } = props;
    let headingId = (0, $c1jOQ$reactariautils.useId)();
    return {
        itemProps: {
            role: 'presentation'
        },
        headingProps: heading ? {
            // Techincally, menus cannot contain headings according to ARIA.
            // We hide the heading from assistive technology, using role="presentation",
            // and only use it as a label for the nested group.
            id: headingId,
            role: 'presentation'
        } : {},
        groupProps: {
            role: 'group',
            'aria-label': ariaLabel,
            'aria-labelledby': heading ? headingId : undefined
        }
    };
} //# sourceMappingURL=useMenuSection.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/useSafelyMouseToSubmenu.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $g3RPq$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $g3RPq$reactariainteractions = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/node_modules/@react-aria/interactions/dist/main.js [app-ssr] (ecmascript)");
var $g3RPq$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useSafelyMouseToSubmenu", ()=>$62347d8c4183e713$export$85ec83e04c95f50a);
const $62347d8c4183e713$var$ALLOWED_INVALID_MOVEMENTS = 2;
const $62347d8c4183e713$var$THROTTLE_TIME = 50;
const $62347d8c4183e713$var$TIMEOUT_TIME = 1000;
const $62347d8c4183e713$var$ANGLE_PADDING = Math.PI / 12; // 15°
function $62347d8c4183e713$export$85ec83e04c95f50a(options) {
    let { menuRef: menuRef, submenuRef: submenuRef, isOpen: isOpen, isDisabled: isDisabled } = options;
    let prevPointerPos = (0, $g3RPq$react.useRef)(undefined);
    let submenuRect = (0, $g3RPq$react.useRef)(undefined);
    let lastProcessedTime = (0, $g3RPq$react.useRef)(0);
    let timeout = (0, $g3RPq$react.useRef)(undefined);
    let autoCloseTimeout = (0, $g3RPq$react.useRef)(undefined);
    let submenuSide = (0, $g3RPq$react.useRef)(undefined);
    let movementsTowardsSubmenuCount = (0, $g3RPq$react.useRef)(2);
    let [preventPointerEvents, setPreventPointerEvents] = (0, $g3RPq$react.useState)(false);
    let updateSubmenuRect = ()=>{
        if (submenuRef.current) {
            submenuRect.current = submenuRef.current.getBoundingClientRect();
            submenuSide.current = undefined;
        }
    };
    (0, $g3RPq$reactariautils.useResizeObserver)({
        ref: submenuRef,
        onResize: updateSubmenuRect
    });
    let reset = ()=>{
        setPreventPointerEvents(false);
        movementsTowardsSubmenuCount.current = $62347d8c4183e713$var$ALLOWED_INVALID_MOVEMENTS;
        prevPointerPos.current = undefined;
    };
    let modality = (0, $g3RPq$reactariainteractions.useInteractionModality)();
    (0, $g3RPq$react.useEffect)(()=>{
        if (preventPointerEvents && menuRef.current) menuRef.current.style.pointerEvents = 'none';
        else menuRef.current.style.pointerEvents = '';
    }, [
        menuRef,
        preventPointerEvents
    ]);
    (0, $g3RPq$react.useEffect)(()=>{
        let submenu = submenuRef.current;
        let menu = menuRef.current;
        if (isDisabled || !submenu || !isOpen || modality !== 'pointer' || !menu) {
            reset();
            return;
        }
        submenuRect.current = submenu.getBoundingClientRect();
        let onPointerMove = (e)=>{
            if (e.pointerType === 'touch' || e.pointerType === 'pen') return;
            let currentTime = Date.now();
            // Throttle
            if (currentTime - lastProcessedTime.current < $62347d8c4183e713$var$THROTTLE_TIME) return;
            clearTimeout(timeout.current);
            clearTimeout(autoCloseTimeout.current);
            let { clientX: mouseX, clientY: mouseY } = e;
            if (!prevPointerPos.current) {
                prevPointerPos.current = {
                    x: mouseX,
                    y: mouseY
                };
                return;
            }
            if (!submenuRect.current) return;
            if (!submenuSide.current) submenuSide.current = mouseX > submenuRect.current.right ? 'left' : 'right';
            // Pointer is outside of parent menu
            if (mouseX < menu.getBoundingClientRect().left || mouseX > menu.getBoundingClientRect().right || mouseY < menu.getBoundingClientRect().top || mouseY > menu.getBoundingClientRect().bottom) {
                reset();
                return;
            }
            /* Check if pointer is moving towards submenu.
        Uses the 2-argument arctangent (https://en.wikipedia.org/wiki/Atan2) to calculate:
          - angle between previous pointer and top of submenu
          - angle between previous pointer and bottom of submenu
          - angle between previous pointer and current pointer (delta)
        If the pointer delta angle value is between the top and bottom angle values, we know the pointer is moving towards the submenu.
      */ let prevMouseX = prevPointerPos.current.x;
            let prevMouseY = prevPointerPos.current.y;
            let toSubmenuX = submenuSide.current === 'right' ? submenuRect.current.left - prevMouseX : prevMouseX - submenuRect.current.right;
            let angleTop = Math.atan2(prevMouseY - submenuRect.current.top, toSubmenuX) + $62347d8c4183e713$var$ANGLE_PADDING;
            let angleBottom = Math.atan2(prevMouseY - submenuRect.current.bottom, toSubmenuX) - $62347d8c4183e713$var$ANGLE_PADDING;
            let anglePointer = Math.atan2(prevMouseY - mouseY, submenuSide.current === 'left' ? -(mouseX - prevMouseX) : mouseX - prevMouseX);
            let isMovingTowardsSubmenu = anglePointer < angleTop && anglePointer > angleBottom;
            movementsTowardsSubmenuCount.current = isMovingTowardsSubmenu ? Math.min(movementsTowardsSubmenuCount.current + 1, $62347d8c4183e713$var$ALLOWED_INVALID_MOVEMENTS) : Math.max(movementsTowardsSubmenuCount.current - 1, 0);
            if (movementsTowardsSubmenuCount.current >= $62347d8c4183e713$var$ALLOWED_INVALID_MOVEMENTS) setPreventPointerEvents(true);
            else setPreventPointerEvents(false);
            lastProcessedTime.current = currentTime;
            prevPointerPos.current = {
                x: mouseX,
                y: mouseY
            };
            // If the pointer is moving towards the submenu, start a timeout to close if no other movements are made after 500ms.
            if (isMovingTowardsSubmenu) timeout.current = setTimeout(()=>{
                reset();
                autoCloseTimeout.current = setTimeout(()=>{
                    // Fire a pointerover event to trigger the menu to close.
                    // Wait until pointer-events:none is no longer applied
                    let target = document.elementFromPoint(mouseX, mouseY);
                    if (target && menu.contains(target)) target.dispatchEvent(new PointerEvent('pointerover', {
                        bubbles: true,
                        cancelable: true
                    }));
                }, 100);
            }, $62347d8c4183e713$var$TIMEOUT_TIME);
        };
        window.addEventListener('pointermove', onPointerMove);
        return ()=>{
            window.removeEventListener('pointermove', onPointerMove);
            clearTimeout(timeout.current);
            clearTimeout(autoCloseTimeout.current);
            movementsTowardsSubmenuCount.current = $62347d8c4183e713$var$ALLOWED_INVALID_MOVEMENTS;
        };
    }, [
        isDisabled,
        isOpen,
        menuRef,
        modality,
        setPreventPointerEvents,
        submenuRef
    ]);
} //# sourceMappingURL=useSafelyMouseToSubmenu.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/useSubmenuTrigger.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $62347d8c4183e713$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/useSafelyMouseToSubmenu.main.js [app-ssr] (ecmascript)");
var $23MMN$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $23MMN$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $23MMN$reactariai18n = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useSubmenuTrigger", ()=>$5f4753043c9f6cdf$export$7138b0d059a6e743);
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $5f4753043c9f6cdf$export$7138b0d059a6e743(props, state, ref) {
    let { parentMenuRef: parentMenuRef, submenuRef: submenuRef, type: type = 'menu', isDisabled: isDisabled, delay: delay = 200 } = props;
    let submenuTriggerId = (0, $23MMN$reactariautils.useId)();
    let overlayId = (0, $23MMN$reactariautils.useId)();
    let { direction: direction } = (0, $23MMN$reactariai18n.useLocale)();
    let openTimeout = (0, $23MMN$react.useRef)(undefined);
    let cancelOpenTimeout = (0, $23MMN$react.useCallback)(()=>{
        if (openTimeout.current) {
            clearTimeout(openTimeout.current);
            openTimeout.current = undefined;
        }
    }, [
        openTimeout
    ]);
    let onSubmenuOpen = (0, $23MMN$reactariautils.useEffectEvent)((focusStrategy)=>{
        cancelOpenTimeout();
        state.open(focusStrategy);
    });
    let onSubmenuClose = (0, $23MMN$reactariautils.useEffectEvent)(()=>{
        cancelOpenTimeout();
        state.close();
    });
    (0, $23MMN$reactariautils.useLayoutEffect)(()=>{
        return ()=>{
            cancelOpenTimeout();
        };
    }, [
        cancelOpenTimeout
    ]);
    let submenuKeyDown = (e)=>{
        switch(e.key){
            case 'ArrowLeft':
                if (direction === 'ltr' && e.currentTarget.contains(e.target)) {
                    var _ref_current;
                    e.stopPropagation();
                    onSubmenuClose();
                    (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.focus();
                }
                break;
            case 'ArrowRight':
                if (direction === 'rtl' && e.currentTarget.contains(e.target)) {
                    var _ref_current1;
                    e.stopPropagation();
                    onSubmenuClose();
                    (_ref_current1 = ref.current) === null || _ref_current1 === void 0 ? void 0 : _ref_current1.focus();
                }
                break;
            case 'Escape':
                e.stopPropagation();
                state.closeAll();
                break;
        }
    };
    var _state_focusStrategy;
    let submenuProps = {
        id: overlayId,
        'aria-labelledby': submenuTriggerId,
        submenuLevel: state.submenuLevel,
        ...type === 'menu' && {
            onClose: state.closeAll,
            autoFocus: (_state_focusStrategy = state.focusStrategy) !== null && _state_focusStrategy !== void 0 ? _state_focusStrategy : undefined,
            onKeyDown: submenuKeyDown
        }
    };
    let submenuTriggerKeyDown = (e)=>{
        switch(e.key){
            case 'ArrowRight':
                if (!isDisabled) {
                    if (direction === 'ltr') {
                        if (!state.isOpen) onSubmenuOpen('first');
                        if (type === 'menu' && !!(submenuRef === null || submenuRef === void 0 ? void 0 : submenuRef.current) && document.activeElement === (ref === null || ref === void 0 ? void 0 : ref.current)) submenuRef.current.focus();
                    } else if (state.isOpen) onSubmenuClose();
                    else e.continuePropagation();
                }
                break;
            case 'ArrowLeft':
                if (!isDisabled) {
                    if (direction === 'rtl') {
                        if (!state.isOpen) onSubmenuOpen('first');
                        if (type === 'menu' && !!(submenuRef === null || submenuRef === void 0 ? void 0 : submenuRef.current) && document.activeElement === (ref === null || ref === void 0 ? void 0 : ref.current)) submenuRef.current.focus();
                    } else if (state.isOpen) onSubmenuClose();
                    else e.continuePropagation();
                }
                break;
            case 'Escape':
                state.closeAll();
                break;
            default:
                e.continuePropagation();
                break;
        }
    };
    let onPressStart = (e)=>{
        if (!isDisabled && (e.pointerType === 'virtual' || e.pointerType === 'keyboard')) onSubmenuOpen('first');
    };
    let onPress = (e)=>{
        if (!isDisabled && (e.pointerType === 'touch' || e.pointerType === 'mouse')) // press up happening on the newly opened tray items
        onSubmenuOpen();
    };
    let onHoverChange = (isHovered)=>{
        if (!isDisabled) {
            if (isHovered && !state.isOpen) {
                if (!openTimeout.current) openTimeout.current = setTimeout(()=>{
                    onSubmenuOpen();
                }, delay);
            } else if (!isHovered) cancelOpenTimeout();
        }
    };
    let onBlur = (e)=>{
        var _parentMenuRef_current;
        if (state.isOpen && ((_parentMenuRef_current = parentMenuRef.current) === null || _parentMenuRef_current === void 0 ? void 0 : _parentMenuRef_current.contains(e.relatedTarget))) onSubmenuClose();
    };
    let shouldCloseOnInteractOutside = (target)=>{
        if (target !== ref.current) return true;
        return false;
    };
    (0, $62347d8c4183e713$exports.useSafelyMouseToSubmenu)({
        menuRef: parentMenuRef,
        submenuRef: submenuRef,
        isOpen: state.isOpen,
        isDisabled: isDisabled
    });
    return {
        submenuTriggerProps: {
            id: submenuTriggerId,
            'aria-controls': state.isOpen ? overlayId : undefined,
            'aria-haspopup': !isDisabled ? type : undefined,
            'aria-expanded': state.isOpen ? 'true' : 'false',
            onPressStart: onPressStart,
            onPress: onPress,
            onHoverChange: onHoverChange,
            onKeyDown: submenuTriggerKeyDown,
            onBlur: onBlur,
            isOpen: state.isOpen
        },
        submenuProps: submenuProps,
        popoverProps: {
            isNonModal: true,
            disableFocusManagement: true,
            shouldCloseOnInteractOutside: shouldCloseOnInteractOutside
        }
    };
} //# sourceMappingURL=useSubmenuTrigger.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $7211ab9328763fb9$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/useMenuTrigger.main.js [app-ssr] (ecmascript)");
var $a3815f0132802737$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/useMenu.main.js [app-ssr] (ecmascript)");
var $38191ed02615ec07$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/useMenuItem.main.js [app-ssr] (ecmascript)");
var $63008655e23408c5$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/useMenuSection.main.js [app-ssr] (ecmascript)");
var $5f4753043c9f6cdf$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/dist/useSubmenuTrigger.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useMenuTrigger", ()=>$7211ab9328763fb9$exports.useMenuTrigger);
$parcel$export(module.exports, "useMenu", ()=>$a3815f0132802737$exports.useMenu);
$parcel$export(module.exports, "useMenuItem", ()=>$38191ed02615ec07$exports.useMenuItem);
$parcel$export(module.exports, "useMenuSection", ()=>$63008655e23408c5$exports.useMenuSection);
$parcel$export(module.exports, "useSubmenuTrigger", ()=>$5f4753043c9f6cdf$exports.useSubmenuTrigger); /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */  //# sourceMappingURL=main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/ar-AE.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `\u{627}\u{644}\u{62A}\u{642}\u{648}\u{64A}\u{645}`,
    "day": `\u{64A}\u{648}\u{645}`,
    "dayPeriod": `\u{635}/\u{645}`,
    "endDate": `\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{627}\u{644}\u{627}\u{646}\u{62A}\u{647}\u{627}\u{621}`,
    "era": `\u{627}\u{644}\u{639}\u{635}\u{631}`,
    "hour": `\u{627}\u{644}\u{633}\u{627}\u{639}\u{627}\u{62A}`,
    "minute": `\u{627}\u{644}\u{62F}\u{642}\u{627}\u{626}\u{642}`,
    "month": `\u{627}\u{644}\u{634}\u{647}\u{631}`,
    "second": `\u{627}\u{644}\u{62B}\u{648}\u{627}\u{646}\u{64A}`,
    "selectedDateDescription": (args)=>`\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62D}\u{62F}\u{62F}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{627}\u{644}\u{645}\u{62F}\u{649} \u{627}\u{644}\u{632}\u{645}\u{646}\u{64A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${args.startDate} \u{625}\u{644}\u{649} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{627}\u{644}\u{648}\u{642}\u{62A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${args.time}`,
    "startDate": `\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{627}\u{644}\u{628}\u{62F}\u{621}`,
    "timeZoneName": `\u{627}\u{644}\u{62A}\u{648}\u{642}\u{64A}\u{62A}`,
    "weekday": `\u{627}\u{644}\u{64A}\u{648}\u{645}`,
    "year": `\u{627}\u{644}\u{633}\u{646}\u{629}`
}; //# sourceMappingURL=ar-AE.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/bg-BG.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `\u{41A}\u{430}\u{43B}\u{435}\u{43D}\u{434}\u{430}\u{440}`,
    "day": `\u{434}\u{435}\u{43D}`,
    "dayPeriod": `\u{43F}\u{440}.\u{43E}\u{431}./\u{441}\u{43B}.\u{43E}\u{431}.`,
    "endDate": `\u{41A}\u{440}\u{430}\u{439}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}`,
    "era": `\u{435}\u{440}\u{430}`,
    "hour": `\u{447}\u{430}\u{441}`,
    "minute": `\u{43C}\u{438}\u{43D}\u{443}\u{442}\u{430}`,
    "month": `\u{43C}\u{435}\u{441}\u{435}\u{446}`,
    "second": `\u{441}\u{435}\u{43A}\u{443}\u{43D}\u{434}\u{430}`,
    "selectedDateDescription": (args)=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${args.startDate} \u{434}\u{43E} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{432}\u{440}\u{435}\u{43C}\u{435}: ${args.time}`,
    "startDate": `\u{41D}\u{430}\u{447}\u{430}\u{43B}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}`,
    "timeZoneName": `\u{447}\u{430}\u{441}\u{43E}\u{432}\u{430} \u{437}\u{43E}\u{43D}\u{430}`,
    "weekday": `\u{434}\u{435}\u{43D} \u{43E}\u{442} \u{441}\u{435}\u{434}\u{43C}\u{438}\u{446}\u{430}\u{442}\u{430}`,
    "year": `\u{433}\u{43E}\u{434}\u{438}\u{43D}\u{430}`
}; //# sourceMappingURL=bg-BG.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/cs-CZ.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `Kalend\xe1\u{159}`,
    "day": `den`,
    "dayPeriod": `\u{10D}\xe1st dne`,
    "endDate": `Kone\u{10D}n\xe9 datum`,
    "era": `letopo\u{10D}et`,
    "hour": `hodina`,
    "minute": `minuta`,
    "month": `m\u{11B}s\xedc`,
    "second": `sekunda`,
    "selectedDateDescription": (args)=>`Vybran\xe9 datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Vybran\xe9 obdob\xed: ${args.startDate} a\u{17E} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Vybran\xfd \u{10D}as: ${args.time}`,
    "startDate": `Po\u{10D}\xe1te\u{10D}n\xed datum`,
    "timeZoneName": `\u{10D}asov\xe9 p\xe1smo`,
    "weekday": `den v t\xfddnu`,
    "year": `rok`
}; //# sourceMappingURL=cs-CZ.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/da-DK.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `Kalender`,
    "day": `dag`,
    "dayPeriod": `AM/PM`,
    "endDate": `Slutdato`,
    "era": `\xe6ra`,
    "hour": `time`,
    "minute": `minut`,
    "month": `m\xe5ned`,
    "second": `sekund`,
    "selectedDateDescription": (args)=>`Valgt dato: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valgt interval: ${args.startDate} til ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Valgt tidspunkt: ${args.time}`,
    "startDate": `Startdato`,
    "timeZoneName": `tidszone`,
    "weekday": `ugedag`,
    "year": `\xe5r`
}; //# sourceMappingURL=da-DK.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/de-DE.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `Kalender`,
    "day": `Tag`,
    "dayPeriod": `Tagesh\xe4lfte`,
    "endDate": `Enddatum`,
    "era": `Epoche`,
    "hour": `Stunde`,
    "minute": `Minute`,
    "month": `Monat`,
    "second": `Sekunde`,
    "selectedDateDescription": (args)=>`Ausgew\xe4hltes Datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Ausgew\xe4hlter Bereich: ${args.startDate} bis ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Ausgew\xe4hlte Zeit: ${args.time}`,
    "startDate": `Anfangsdatum`,
    "timeZoneName": `Zeitzone`,
    "weekday": `Wochentag`,
    "year": `Jahr`
}; //# sourceMappingURL=de-DE.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/el-GR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `\u{397}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BB}\u{3CC}\u{3B3}\u{3B9}\u{3BF}`,
    "day": `\u{3B7}\u{3BC}\u{3AD}\u{3C1}\u{3B1}`,
    "dayPeriod": `\u{3C0}.\u{3BC}./\u{3BC}.\u{3BC}.`,
    "endDate": `\u{397}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1} \u{3BB}\u{3AE}\u{3BE}\u{3B7}\u{3C2}`,
    "era": `\u{3C0}\u{3B5}\u{3C1}\u{3AF}\u{3BF}\u{3B4}\u{3BF}\u{3C2}`,
    "hour": `\u{3CE}\u{3C1}\u{3B1}`,
    "minute": `\u{3BB}\u{3B5}\u{3C0}\u{3C4}\u{3CC}`,
    "month": `\u{3BC}\u{3AE}\u{3BD}\u{3B1}\u{3C2}`,
    "second": `\u{3B4}\u{3B5}\u{3C5}\u{3C4}\u{3B5}\u{3C1}\u{3CC}\u{3BB}\u{3B5}\u{3C0}\u{3C4}\u{3BF}`,
    "selectedDateDescription": (args)=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C2}: ${args.startDate} \u{3AD}\u{3C9}\u{3C2} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3CE}\u{3C1}\u{3B1}: ${args.time}`,
    "startDate": `\u{397}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1} \u{3AD}\u{3BD}\u{3B1}\u{3C1}\u{3BE}\u{3B7}\u{3C2}`,
    "timeZoneName": `\u{3B6}\u{3CE}\u{3BD}\u{3B7} \u{3CE}\u{3C1}\u{3B1}\u{3C2}`,
    "weekday": `\u{3BA}\u{3B1}\u{3B8}\u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3B9}\u{3BD}\u{3AE}`,
    "year": `\u{3AD}\u{3C4}\u{3BF}\u{3C2}`
}; //# sourceMappingURL=el-GR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/en-US.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "era": `era`,
    "year": `year`,
    "month": `month`,
    "day": `day`,
    "hour": `hour`,
    "minute": `minute`,
    "second": `second`,
    "dayPeriod": `AM/PM`,
    "calendar": `Calendar`,
    "startDate": `Start Date`,
    "endDate": `End Date`,
    "weekday": `day of the week`,
    "timeZoneName": `time zone`,
    "selectedDateDescription": (args)=>`Selected Date: ${args.date}`,
    "selectedRangeDescription": (args)=>`Selected Range: ${args.startDate} to ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Selected Time: ${args.time}`
}; //# sourceMappingURL=en-US.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/es-ES.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `Calendario`,
    "day": `d\xeda`,
    "dayPeriod": `a.\xa0m./p.\xa0m.`,
    "endDate": `Fecha final`,
    "era": `era`,
    "hour": `hora`,
    "minute": `minuto`,
    "month": `mes`,
    "second": `segundo`,
    "selectedDateDescription": (args)=>`Fecha seleccionada: ${args.date}`,
    "selectedRangeDescription": (args)=>`Rango seleccionado: ${args.startDate} a ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Hora seleccionada: ${args.time}`,
    "startDate": `Fecha de inicio`,
    "timeZoneName": `zona horaria`,
    "weekday": `d\xeda de la semana`,
    "year": `a\xf1o`
}; //# sourceMappingURL=es-ES.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/et-EE.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `Kalender`,
    "day": `p\xe4ev`,
    "dayPeriod": `enne/p\xe4rast l\xf5unat`,
    "endDate": `L\xf5ppkuup\xe4ev`,
    "era": `ajastu`,
    "hour": `tund`,
    "minute": `minut`,
    "month": `kuu`,
    "second": `sekund`,
    "selectedDateDescription": (args)=>`Valitud kuup\xe4ev: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valitud vahemik: ${args.startDate} kuni ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Valitud aeg: ${args.time}`,
    "startDate": `Alguskuup\xe4ev`,
    "timeZoneName": `ajav\xf6\xf6nd`,
    "weekday": `n\xe4dalap\xe4ev`,
    "year": `aasta`
}; //# sourceMappingURL=et-EE.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/fi-FI.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `Kalenteri`,
    "day": `p\xe4iv\xe4`,
    "dayPeriod": `vuorokaudenaika`,
    "endDate": `P\xe4\xe4ttymisp\xe4iv\xe4`,
    "era": `aikakausi`,
    "hour": `tunti`,
    "minute": `minuutti`,
    "month": `kuukausi`,
    "second": `sekunti`,
    "selectedDateDescription": (args)=>`Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valittu aikav\xe4li: ${args.startDate} \u{2013} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Valittu aika: ${args.time}`,
    "startDate": `Alkamisp\xe4iv\xe4`,
    "timeZoneName": `aikavy\xf6hyke`,
    "weekday": `viikonp\xe4iv\xe4`,
    "year": `vuosi`
}; //# sourceMappingURL=fi-FI.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/fr-FR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `Calendrier`,
    "day": `jour`,
    "dayPeriod": `cadran`,
    "endDate": `Date de fin`,
    "era": `\xe8re`,
    "hour": `heure`,
    "minute": `minute`,
    "month": `mois`,
    "second": `seconde`,
    "selectedDateDescription": (args)=>`Date s\xe9lectionn\xe9e\xa0: ${args.date}`,
    "selectedRangeDescription": (args)=>`Plage s\xe9lectionn\xe9e\xa0: ${args.startDate} au ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Heure choisie\xa0: ${args.time}`,
    "startDate": `Date de d\xe9but`,
    "timeZoneName": `fuseau horaire`,
    "weekday": `jour de la semaine`,
    "year": `ann\xe9e`
}; //# sourceMappingURL=fr-FR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/he-IL.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `\u{5DC}\u{5D5}\u{5D7} \u{5E9}\u{5E0}\u{5D4}`,
    "day": `\u{5D9}\u{5D5}\u{5DD}`,
    "dayPeriod": `\u{5DC}\u{5E4}\u{5E0}\u{5D4}\u{5F4}\u{5E6}/\u{5D0}\u{5D7}\u{5D4}\u{5F4}\u{5E6}`,
    "endDate": `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E1}\u{5D9}\u{5D5}\u{5DD}`,
    "era": `\u{5EA}\u{5E7}\u{5D5}\u{5E4}\u{5D4}`,
    "hour": `\u{5E9}\u{5E2}\u{5D4}`,
    "minute": `\u{5D3}\u{5E7}\u{5D4}`,
    "month": `\u{5D7}\u{5D5}\u{5D3}\u{5E9}`,
    "second": `\u{5E9}\u{5E0}\u{5D9}\u{5D9}\u{5D4}`,
    "selectedDateDescription": (args)=>`\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${args.startDate} \u{5E2}\u{5D3} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{5D6}\u{5DE}\u{5DF} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${args.time}`,
    "startDate": `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5D4}\u{5EA}\u{5D7}\u{5DC}\u{5D4}`,
    "timeZoneName": `\u{5D0}\u{5D6}\u{5D5}\u{5E8} \u{5D6}\u{5DE}\u{5DF}`,
    "weekday": `\u{5D9}\u{5D5}\u{5DD} \u{5D1}\u{5E9}\u{5D1}\u{5D5}\u{5E2}`,
    "year": `\u{5E9}\u{5E0}\u{5D4}`
}; //# sourceMappingURL=he-IL.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/hr-HR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `Kalendar`,
    "day": `dan`,
    "dayPeriod": `AM/PM`,
    "endDate": `Datum zavr\u{161}etka`,
    "era": `era`,
    "hour": `sat`,
    "minute": `minuta`,
    "month": `mjesec`,
    "second": `sekunda`,
    "selectedDateDescription": (args)=>`Odabrani datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Odabrani raspon: ${args.startDate} do ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Odabrano vrijeme: ${args.time}`,
    "startDate": `Datum po\u{10D}etka`,
    "timeZoneName": `vremenska zona`,
    "weekday": `dan u tjednu`,
    "year": `godina`
}; //# sourceMappingURL=hr-HR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/hu-HU.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `Napt\xe1r`,
    "day": `nap`,
    "dayPeriod": `napszak`,
    "endDate": `Befejez\u{151} d\xe1tum`,
    "era": `\xe9ra`,
    "hour": `\xf3ra`,
    "minute": `perc`,
    "month": `h\xf3nap`,
    "second": `m\xe1sodperc`,
    "selectedDateDescription": (args)=>`Kijel\xf6lt d\xe1tum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Kijel\xf6lt tartom\xe1ny: ${args.startDate}\u{2013}${args.endDate}`,
    "selectedTimeDescription": (args)=>`Kijel\xf6lt id\u{151}: ${args.time}`,
    "startDate": `Kezd\u{151} d\xe1tum`,
    "timeZoneName": `id\u{151}z\xf3na`,
    "weekday": `h\xe9t napja`,
    "year": `\xe9v`
}; //# sourceMappingURL=hu-HU.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/it-IT.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `Calendario`,
    "day": `giorno`,
    "dayPeriod": `AM/PM`,
    "endDate": `Data finale`,
    "era": `era`,
    "hour": `ora`,
    "minute": `minuto`,
    "month": `mese`,
    "second": `secondo`,
    "selectedDateDescription": (args)=>`Data selezionata: ${args.date}`,
    "selectedRangeDescription": (args)=>`Intervallo selezionato: da ${args.startDate} a ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Ora selezionata: ${args.time}`,
    "startDate": `Data iniziale`,
    "timeZoneName": `fuso orario`,
    "weekday": `giorno della settimana`,
    "year": `anno`
}; //# sourceMappingURL=it-IT.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/ja-JP.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `\u{30AB}\u{30EC}\u{30F3}\u{30C0}\u{30FC}`,
    "day": `\u{65E5}`,
    "dayPeriod": `\u{5348}\u{524D}/\u{5348}\u{5F8C}`,
    "endDate": `\u{7D42}\u{4E86}\u{65E5}`,
    "era": `\u{6642}\u{4EE3}`,
    "hour": `\u{6642}`,
    "minute": `\u{5206}`,
    "month": `\u{6708}`,
    "second": `\u{79D2}`,
    "selectedDateDescription": (args)=>`\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8} : ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{9078}\u{629E}\u{7BC4}\u{56F2} : ${args.startDate} \u{304B}\u{3089} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{9078}\u{629E}\u{3057}\u{305F}\u{6642}\u{9593} : ${args.time}`,
    "startDate": `\u{958B}\u{59CB}\u{65E5}`,
    "timeZoneName": `\u{30BF}\u{30A4}\u{30E0}\u{30BE}\u{30FC}\u{30F3}`,
    "weekday": `\u{66DC}\u{65E5}`,
    "year": `\u{5E74}`
}; //# sourceMappingURL=ja-JP.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/ko-KR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `\u{B2EC}\u{B825}`,
    "day": `\u{C77C}`,
    "dayPeriod": `\u{C624}\u{C804}/\u{C624}\u{D6C4}`,
    "endDate": `\u{C885}\u{B8CC}\u{C77C}`,
    "era": `\u{C5F0}\u{D638}`,
    "hour": `\u{C2DC}`,
    "minute": `\u{BD84}`,
    "month": `\u{C6D4}`,
    "second": `\u{CD08}`,
    "selectedDateDescription": (args)=>`\u{C120}\u{D0DD} \u{C77C}\u{C790}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{C120}\u{D0DD} \u{BC94}\u{C704}: ${args.startDate} ~ ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{C120}\u{D0DD} \u{C2DC}\u{AC04}: ${args.time}`,
    "startDate": `\u{C2DC}\u{C791}\u{C77C}`,
    "timeZoneName": `\u{C2DC}\u{AC04}\u{B300}`,
    "weekday": `\u{C694}\u{C77C}`,
    "year": `\u{B144}`
}; //# sourceMappingURL=ko-KR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/lt-LT.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `Kalendorius`,
    "day": `diena`,
    "dayPeriod": `iki piet\u{173} / po piet\u{173}`,
    "endDate": `Pabaigos data`,
    "era": `era`,
    "hour": `valanda`,
    "minute": `minut\u{117}`,
    "month": `m\u{117}nuo`,
    "second": `sekund\u{117}`,
    "selectedDateDescription": (args)=>`Pasirinkta data: ${args.date}`,
    "selectedRangeDescription": (args)=>`Pasirinktas intervalas: nuo ${args.startDate} iki ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Pasirinktas laikas: ${args.time}`,
    "startDate": `Prad\u{17E}ios data`,
    "timeZoneName": `laiko juosta`,
    "weekday": `savait\u{117}s diena`,
    "year": `metai`
}; //# sourceMappingURL=lt-LT.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/lv-LV.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `Kalend\u{101}rs`,
    "day": `diena`,
    "dayPeriod": `priek\u{161}pusdien\u{101}/p\u{113}cpusdien\u{101}`,
    "endDate": `Beigu datums`,
    "era": `\u{113}ra`,
    "hour": `stundas`,
    "minute": `min\u{16B}tes`,
    "month": `m\u{113}nesis`,
    "second": `sekundes`,
    "selectedDateDescription": (args)=>`Atlas\u{12B}tais datums: ${args.date}`,
    "selectedRangeDescription": (args)=>`Atlas\u{12B}tais diapazons: no ${args.startDate} l\u{12B}dz ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Atlas\u{12B}tais laiks: ${args.time}`,
    "startDate": `S\u{101}kuma datums`,
    "timeZoneName": `laika josla`,
    "weekday": `ned\u{113}\u{13C}as diena`,
    "year": `gads`
}; //# sourceMappingURL=lv-LV.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/nb-NO.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `Kalender`,
    "day": `dag`,
    "dayPeriod": `a.m./p.m.`,
    "endDate": `Sluttdato`,
    "era": `tidsalder`,
    "hour": `time`,
    "minute": `minutt`,
    "month": `m\xe5ned`,
    "second": `sekund`,
    "selectedDateDescription": (args)=>`Valgt dato: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valgt omr\xe5de: ${args.startDate} til ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Valgt tid: ${args.time}`,
    "startDate": `Startdato`,
    "timeZoneName": `tidssone`,
    "weekday": `ukedag`,
    "year": `\xe5r`
}; //# sourceMappingURL=nb-NO.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/nl-NL.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `Kalender`,
    "day": `dag`,
    "dayPeriod": `a.m./p.m.`,
    "endDate": `Einddatum`,
    "era": `tijdperk`,
    "hour": `uur`,
    "minute": `minuut`,
    "month": `maand`,
    "second": `seconde`,
    "selectedDateDescription": (args)=>`Geselecteerde datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Geselecteerd bereik: ${args.startDate} tot ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Geselecteerde tijd: ${args.time}`,
    "startDate": `Startdatum`,
    "timeZoneName": `tijdzone`,
    "weekday": `dag van de week`,
    "year": `jaar`
}; //# sourceMappingURL=nl-NL.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/pl-PL.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `Kalendarz`,
    "day": `dzie\u{144}`,
    "dayPeriod": `rano / po po\u{142}udniu / wieczorem`,
    "endDate": `Data ko\u{144}cowa`,
    "era": `era`,
    "hour": `godzina`,
    "minute": `minuta`,
    "month": `miesi\u{105}c`,
    "second": `sekunda`,
    "selectedDateDescription": (args)=>`Wybrana data: ${args.date}`,
    "selectedRangeDescription": (args)=>`Wybrany zakres: ${args.startDate} do ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Wybrany czas: ${args.time}`,
    "startDate": `Data pocz\u{105}tkowa`,
    "timeZoneName": `strefa czasowa`,
    "weekday": `dzie\u{144} tygodnia`,
    "year": `rok`
}; //# sourceMappingURL=pl-PL.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/pt-BR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `Calend\xe1rio`,
    "day": `dia`,
    "dayPeriod": `AM/PM`,
    "endDate": `Data final`,
    "era": `era`,
    "hour": `hora`,
    "minute": `minuto`,
    "month": `m\xeas`,
    "second": `segundo`,
    "selectedDateDescription": (args)=>`Data selecionada: ${args.date}`,
    "selectedRangeDescription": (args)=>`Intervalo selecionado: ${args.startDate} a ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Hora selecionada: ${args.time}`,
    "startDate": `Data inicial`,
    "timeZoneName": `fuso hor\xe1rio`,
    "weekday": `dia da semana`,
    "year": `ano`
}; //# sourceMappingURL=pt-BR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/pt-PT.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `Calend\xe1rio`,
    "day": `dia`,
    "dayPeriod": `am/pm`,
    "endDate": `Data de T\xe9rmino`,
    "era": `era`,
    "hour": `hora`,
    "minute": `minuto`,
    "month": `m\xeas`,
    "second": `segundo`,
    "selectedDateDescription": (args)=>`Data selecionada: ${args.date}`,
    "selectedRangeDescription": (args)=>`Intervalo selecionado: ${args.startDate} a ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Hora selecionada: ${args.time}`,
    "startDate": `Data de In\xedcio`,
    "timeZoneName": `fuso hor\xe1rio`,
    "weekday": `dia da semana`,
    "year": `ano`
}; //# sourceMappingURL=pt-PT.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/ro-RO.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `Calendar`,
    "day": `zi`,
    "dayPeriod": `a.m/p.m.`,
    "endDate": `Dat\u{103} final`,
    "era": `er\u{103}`,
    "hour": `or\u{103}`,
    "minute": `minut`,
    "month": `lun\u{103}`,
    "second": `secund\u{103}`,
    "selectedDateDescription": (args)=>`Dat\u{103} selectat\u{103}: ${args.date}`,
    "selectedRangeDescription": (args)=>`Interval selectat: de la ${args.startDate} p\xe2n\u{103} la ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Ora selectat\u{103}: ${args.time}`,
    "startDate": `Dat\u{103} \xeenceput`,
    "timeZoneName": `fus orar`,
    "weekday": `ziua din s\u{103}pt\u{103}m\xe2n\u{103}`,
    "year": `an`
}; //# sourceMappingURL=ro-RO.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/ru-RU.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `\u{41A}\u{430}\u{43B}\u{435}\u{43D}\u{434}\u{430}\u{440}\u{44C}`,
    "day": `\u{434}\u{435}\u{43D}\u{44C}`,
    "dayPeriod": `AM/PM`,
    "endDate": `\u{414}\u{430}\u{442}\u{430} \u{43E}\u{43A}\u{43E}\u{43D}\u{447}\u{430}\u{43D}\u{438}\u{44F}`,
    "era": `\u{44D}\u{440}\u{430}`,
    "hour": `\u{447}\u{430}\u{441}`,
    "minute": `\u{43C}\u{438}\u{43D}\u{443}\u{442}\u{430}`,
    "month": `\u{43C}\u{435}\u{441}\u{44F}\u{446}`,
    "second": `\u{441}\u{435}\u{43A}\u{443}\u{43D}\u{434}\u{430}`,
    "selectedDateDescription": (args)=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: \u{441} ${args.startDate} \u{43F}\u{43E} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{43E}\u{435} \u{432}\u{440}\u{435}\u{43C}\u{44F}: ${args.time}`,
    "startDate": `\u{414}\u{430}\u{442}\u{430} \u{43D}\u{430}\u{447}\u{430}\u{43B}\u{430}`,
    "timeZoneName": `\u{447}\u{430}\u{441}\u{43E}\u{432}\u{43E}\u{439} \u{43F}\u{43E}\u{44F}\u{441}`,
    "weekday": `\u{434}\u{435}\u{43D}\u{44C} \u{43D}\u{435}\u{434}\u{435}\u{43B}\u{438}`,
    "year": `\u{433}\u{43E}\u{434}`
}; //# sourceMappingURL=ru-RU.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/sk-SK.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `Kalend\xe1r`,
    "day": `de\u{148}`,
    "dayPeriod": `AM/PM`,
    "endDate": `D\xe1tum ukon\u{10D}enia`,
    "era": `letopo\u{10D}et`,
    "hour": `hodina`,
    "minute": `min\xfata`,
    "month": `mesiac`,
    "second": `sekunda`,
    "selectedDateDescription": (args)=>`Vybrat\xfd d\xe1tum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Vybrat\xfd rozsah: od ${args.startDate} do ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Vybrat\xfd \u{10D}as: ${args.time}`,
    "startDate": `D\xe1tum za\u{10D}atia`,
    "timeZoneName": `\u{10D}asov\xe9 p\xe1smo`,
    "weekday": `de\u{148} t\xfd\u{17E}d\u{148}a`,
    "year": `rok`
}; //# sourceMappingURL=sk-SK.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/sl-SI.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `Koledar`,
    "day": `dan`,
    "dayPeriod": `dop/pop`,
    "endDate": `Datum konca`,
    "era": `doba`,
    "hour": `ura`,
    "minute": `minuta`,
    "month": `mesec`,
    "second": `sekunda`,
    "selectedDateDescription": (args)=>`Izbrani datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Izbrano obmo\u{10D}je: ${args.startDate} do ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Izbrani \u{10D}as: ${args.time}`,
    "startDate": `Datum za\u{10D}etka`,
    "timeZoneName": `\u{10D}asovni pas`,
    "weekday": `dan v tednu`,
    "year": `leto`
}; //# sourceMappingURL=sl-SI.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/sr-SP.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `Kalendar`,
    "day": `\u{434}\u{430}\u{43D}`,
    "dayPeriod": `\u{43F}\u{440}\u{435} \u{43F}\u{43E}\u{434}\u{43D}\u{435}/\u{43F}\u{43E} \u{43F}\u{43E}\u{434}\u{43D}\u{435}`,
    "endDate": `Datum zavr\u{161}etka`,
    "era": `\u{435}\u{440}\u{430}`,
    "hour": `\u{441}\u{430}\u{442}`,
    "minute": `\u{43C}\u{438}\u{43D}\u{443}\u{442}`,
    "month": `\u{43C}\u{435}\u{441}\u{435}\u{446}`,
    "second": `\u{441}\u{435}\u{43A}\u{443}\u{43D}\u{434}`,
    "selectedDateDescription": (args)=>`Izabrani datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Izabrani opseg: od ${args.startDate} do ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Izabrano vreme: ${args.time}`,
    "startDate": `Datum po\u{10D}etka`,
    "timeZoneName": `\u{432}\u{440}\u{435}\u{43C}\u{435}\u{43D}\u{441}\u{43A}\u{430} \u{437}\u{43E}\u{43D}\u{430}`,
    "weekday": `\u{434}\u{430}\u{43D} \u{443} \u{43D}\u{435}\u{434}\u{435}\u{459}\u{438}`,
    "year": `\u{433}\u{43E}\u{434}\u{438}\u{43D}\u{430}`
}; //# sourceMappingURL=sr-SP.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/sv-SE.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `Kalender`,
    "day": `dag`,
    "dayPeriod": `fm/em`,
    "endDate": `Slutdatum`,
    "era": `era`,
    "hour": `timme`,
    "minute": `minut`,
    "month": `m\xe5nad`,
    "second": `sekund`,
    "selectedDateDescription": (args)=>`Valt datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valt intervall: ${args.startDate} till ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Vald tid: ${args.time}`,
    "startDate": `Startdatum`,
    "timeZoneName": `tidszon`,
    "weekday": `veckodag`,
    "year": `\xe5r`
}; //# sourceMappingURL=sv-SE.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/tr-TR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `Takvim`,
    "day": `g\xfcn`,
    "dayPeriod": `\xd6\xd6/\xd6S`,
    "endDate": `Biti\u{15F} Tarihi`,
    "era": `\xe7a\u{11F}`,
    "hour": `saat`,
    "minute": `dakika`,
    "month": `ay`,
    "second": `saniye`,
    "selectedDateDescription": (args)=>`Se\xe7ilen Tarih: ${args.date}`,
    "selectedRangeDescription": (args)=>`Se\xe7ilen Aral\u{131}k: ${args.startDate} - ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Se\xe7ilen Zaman: ${args.time}`,
    "startDate": `Ba\u{15F}lang\u{131}\xe7 Tarihi`,
    "timeZoneName": `saat dilimi`,
    "weekday": `haftan\u{131}n g\xfcn\xfc`,
    "year": `y\u{131}l`
}; //# sourceMappingURL=tr-TR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/uk-UA.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `\u{41A}\u{430}\u{43B}\u{435}\u{43D}\u{434}\u{430}\u{440}`,
    "day": `\u{434}\u{435}\u{43D}\u{44C}`,
    "dayPeriod": `\u{434}\u{43F}/\u{43F}\u{43F}`,
    "endDate": `\u{414}\u{430}\u{442}\u{430} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{435}\u{43D}\u{43D}\u{44F}`,
    "era": `\u{435}\u{440}\u{430}`,
    "hour": `\u{433}\u{43E}\u{434}\u{438}\u{43D}\u{430}`,
    "minute": `\u{445}\u{432}\u{438}\u{43B}\u{438}\u{43D}\u{430}`,
    "month": `\u{43C}\u{456}\u{441}\u{44F}\u{446}\u{44C}`,
    "second": `\u{441}\u{435}\u{43A}\u{443}\u{43D}\u{434}\u{430}`,
    "selectedDateDescription": (args)=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${args.startDate} \u{2014} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{447}\u{430}\u{441}: ${args.time}`,
    "startDate": `\u{414}\u{430}\u{442}\u{430} \u{43F}\u{43E}\u{447}\u{430}\u{442}\u{43A}\u{443}`,
    "timeZoneName": `\u{447}\u{430}\u{441}\u{43E}\u{432}\u{438}\u{439} \u{43F}\u{43E}\u{44F}\u{441}`,
    "weekday": `\u{434}\u{435}\u{43D}\u{44C} \u{442}\u{438}\u{436}\u{43D}\u{44F}`,
    "year": `\u{440}\u{456}\u{43A}`
}; //# sourceMappingURL=uk-UA.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/zh-CN.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `\u{65E5}\u{5386}`,
    "day": `\u{65E5}`,
    "dayPeriod": `\u{4E0A}\u{5348}/\u{4E0B}\u{5348}`,
    "endDate": `\u{7ED3}\u{675F}\u{65E5}\u{671F}`,
    "era": `\u{7EAA}\u{5143}`,
    "hour": `\u{5C0F}\u{65F6}`,
    "minute": `\u{5206}\u{949F}`,
    "month": `\u{6708}`,
    "second": `\u{79D2}`,
    "selectedDateDescription": (args)=>`\u{9009}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${args.date}`,
    "selectedRangeDescription": (args)=>`\u{9009}\u{5B9A}\u{7684}\u{8303}\u{56F4}\u{FF1A}${args.startDate} \u{81F3} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{9009}\u{5B9A}\u{7684}\u{65F6}\u{95F4}\u{FF1A}${args.time}`,
    "startDate": `\u{5F00}\u{59CB}\u{65E5}\u{671F}`,
    "timeZoneName": `\u{65F6}\u{533A}`,
    "weekday": `\u{5DE5}\u{4F5C}\u{65E5}`,
    "year": `\u{5E74}`
}; //# sourceMappingURL=zh-CN.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/zh-TW.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "calendar": `\u{65E5}\u{66C6}`,
    "day": `\u{65E5}`,
    "dayPeriod": `\u{4E0A}\u{5348}/\u{4E0B}\u{5348}`,
    "endDate": `\u{7D50}\u{675F}\u{65E5}\u{671F}`,
    "era": `\u{7EAA}\u{5143}`,
    "hour": `\u{5C0F}\u{65F6}`,
    "minute": `\u{5206}\u{949F}`,
    "month": `\u{6708}`,
    "second": `\u{79D2}`,
    "selectedDateDescription": (args)=>`\u{9078}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${args.date}`,
    "selectedRangeDescription": (args)=>`\u{9078}\u{5B9A}\u{7684}\u{7BC4}\u{570D}\u{FF1A}${args.startDate} \u{81F3} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{9078}\u{5B9A}\u{7684}\u{6642}\u{9593}\u{FF1A}${args.time}`,
    "startDate": `\u{958B}\u{59CB}\u{65E5}\u{671F}`,
    "timeZoneName": `\u{65F6}\u{533A}`,
    "weekday": `\u{5DE5}\u{4F5C}\u{65E5}`,
    "year": `\u{5E74}`
}; //# sourceMappingURL=zh-TW.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/intlStrings.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $aa344be62785b256$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/ar-AE.main.js [app-ssr] (ecmascript)");
var $615986c3475e7c8c$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/bg-BG.main.js [app-ssr] (ecmascript)");
var $6c6207692f1ab248$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/cs-CZ.main.js [app-ssr] (ecmascript)");
var $fb37a9d024dd70f8$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/da-DK.main.js [app-ssr] (ecmascript)");
var $d7780bd4790f7ae9$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/de-DE.main.js [app-ssr] (ecmascript)");
var $9cdf03311f06c4ac$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/el-GR.main.js [app-ssr] (ecmascript)");
var $f93fc9e164ae811c$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/en-US.main.js [app-ssr] (ecmascript)");
var $7426c3264bf5ffea$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/es-ES.main.js [app-ssr] (ecmascript)");
var $1115cc0042de790c$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/et-EE.main.js [app-ssr] (ecmascript)");
var $4e80389dccb9283f$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/fi-FI.main.js [app-ssr] (ecmascript)");
var $78ad6f738c1f38d1$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/fr-FR.main.js [app-ssr] (ecmascript)");
var $50fa4716d827cd97$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/he-IL.main.js [app-ssr] (ecmascript)");
var $7297908fac4cf6c2$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/hr-HR.main.js [app-ssr] (ecmascript)");
var $f95c1b06e1d5ba32$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/hu-HU.main.js [app-ssr] (ecmascript)");
var $437a8dc519258a01$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/it-IT.main.js [app-ssr] (ecmascript)");
var $bd0aa2b50092a836$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/ja-JP.main.js [app-ssr] (ecmascript)");
var $bbd8176c2e044bc1$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/ko-KR.main.js [app-ssr] (ecmascript)");
var $1af703df56ff5180$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/lt-LT.main.js [app-ssr] (ecmascript)");
var $9705eb4511dea9f8$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/lv-LV.main.js [app-ssr] (ecmascript)");
var $8ef984876a7160bc$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/nb-NO.main.js [app-ssr] (ecmascript)");
var $b6e9809e1ecaa25e$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/nl-NL.main.js [app-ssr] (ecmascript)");
var $deb2fa609661fe31$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/pl-PL.main.js [app-ssr] (ecmascript)");
var $591c8c054c84fa56$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/pt-BR.main.js [app-ssr] (ecmascript)");
var $f1633bd6cbc228e8$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/pt-PT.main.js [app-ssr] (ecmascript)");
var $14e09da03f3d1c5b$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/ro-RO.main.js [app-ssr] (ecmascript)");
var $63247a3456bc40d1$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/ru-RU.main.js [app-ssr] (ecmascript)");
var $22150dd20c353dd4$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/sk-SK.main.js [app-ssr] (ecmascript)");
var $701eb9a0385c55fd$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/sl-SI.main.js [app-ssr] (ecmascript)");
var $54684a4891ca6dc5$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/sr-SP.main.js [app-ssr] (ecmascript)");
var $545887f88a5a52db$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/sv-SE.main.js [app-ssr] (ecmascript)");
var $492d49420dd96ff4$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/tr-TR.main.js [app-ssr] (ecmascript)");
var $dc85765e85e8f267$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/uk-UA.main.js [app-ssr] (ecmascript)");
var $2157d63cb80c7c63$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/zh-CN.main.js [app-ssr] (ecmascript)");
var $0335c3ddb5f70cbe$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/zh-TW.main.js [app-ssr] (ecmascript)");
module.exports = {
    "ar-AE": $aa344be62785b256$exports,
    "bg-BG": $615986c3475e7c8c$exports,
    "cs-CZ": $6c6207692f1ab248$exports,
    "da-DK": $fb37a9d024dd70f8$exports,
    "de-DE": $d7780bd4790f7ae9$exports,
    "el-GR": $9cdf03311f06c4ac$exports,
    "en-US": $f93fc9e164ae811c$exports,
    "es-ES": $7426c3264bf5ffea$exports,
    "et-EE": $1115cc0042de790c$exports,
    "fi-FI": $4e80389dccb9283f$exports,
    "fr-FR": $78ad6f738c1f38d1$exports,
    "he-IL": $50fa4716d827cd97$exports,
    "hr-HR": $7297908fac4cf6c2$exports,
    "hu-HU": $f95c1b06e1d5ba32$exports,
    "it-IT": $437a8dc519258a01$exports,
    "ja-JP": $bd0aa2b50092a836$exports,
    "ko-KR": $bbd8176c2e044bc1$exports,
    "lt-LT": $1af703df56ff5180$exports,
    "lv-LV": $9705eb4511dea9f8$exports,
    "nb-NO": $8ef984876a7160bc$exports,
    "nl-NL": $b6e9809e1ecaa25e$exports,
    "pl-PL": $deb2fa609661fe31$exports,
    "pt-BR": $591c8c054c84fa56$exports,
    "pt-PT": $f1633bd6cbc228e8$exports,
    "ro-RO": $14e09da03f3d1c5b$exports,
    "ru-RU": $63247a3456bc40d1$exports,
    "sk-SK": $22150dd20c353dd4$exports,
    "sl-SI": $701eb9a0385c55fd$exports,
    "sr-SP": $54684a4891ca6dc5$exports,
    "sv-SE": $545887f88a5a52db$exports,
    "tr-TR": $492d49420dd96ff4$exports,
    "uk-UA": $dc85765e85e8f267$exports,
    "zh-CN": $2157d63cb80c7c63$exports,
    "zh-TW": $0335c3ddb5f70cbe$exports
}; //# sourceMappingURL=intlStrings.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/useDatePickerGroup.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $19S5E$reactariafocus = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/node_modules/@react-aria/focus/dist/main.js [app-ssr] (ecmascript)");
var $19S5E$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $19S5E$reactariai18n = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/main.js [app-ssr] (ecmascript)");
var $19S5E$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $19S5E$reactariainteractions = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/node_modules/@react-aria/interactions/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useDatePickerGroup", ()=>$715562ad3b4cced4$export$4a931266a3838b86);
function $715562ad3b4cced4$export$4a931266a3838b86(state, ref, disableArrowNavigation) {
    let { direction: direction } = (0, $19S5E$reactariai18n.useLocale)();
    let focusManager = (0, $19S5E$react.useMemo)(()=>(0, $19S5E$reactariafocus.createFocusManager)(ref), [
        ref
    ]);
    // Open the popover on alt + arrow down
    let onKeyDown = (e)=>{
        if (!e.currentTarget.contains(e.target)) return;
        if (e.altKey && (e.key === 'ArrowDown' || e.key === 'ArrowUp') && 'setOpen' in state) {
            e.preventDefault();
            e.stopPropagation();
            state.setOpen(true);
        }
        if (disableArrowNavigation) return;
        switch(e.key){
            case 'ArrowLeft':
                e.preventDefault();
                e.stopPropagation();
                if (direction === 'rtl') focusManager.focusNext();
                else focusManager.focusPrevious();
                break;
            case 'ArrowRight':
                e.preventDefault();
                e.stopPropagation();
                if (direction === 'rtl') focusManager.focusPrevious();
                else focusManager.focusNext();
                break;
        }
    };
    // Focus the first placeholder segment from the end on mouse down/touch up in the field.
    let focusLast = ()=>{
        var _window_event;
        if (!ref.current) return;
        // Try to find the segment prior to the element that was clicked on.
        let target = (_window_event = window.event) === null || _window_event === void 0 ? void 0 : _window_event.target;
        let walker = (0, $19S5E$reactariafocus.getFocusableTreeWalker)(ref.current, {
            tabbable: true
        });
        if (target) {
            walker.currentNode = target;
            target = walker.previousNode();
        }
        // If no target found, find the last element from the end.
        if (!target) {
            let last;
            do {
                last = walker.lastChild();
                if (last) target = last;
            }while (last)
        }
        // Now go backwards until we find an element that is not a placeholder.
        while(target === null || target === void 0 ? void 0 : target.hasAttribute('data-placeholder')){
            let prev = walker.previousNode();
            if (prev && prev.hasAttribute('data-placeholder')) target = prev;
            else break;
        }
        if (target) target.focus();
    };
    let { pressProps: pressProps } = (0, $19S5E$reactariainteractions.usePress)({
        preventFocusOnPress: true,
        allowTextSelectionOnPress: true,
        onPressStart (e) {
            if (e.pointerType === 'mouse') focusLast();
        },
        onPress (e) {
            if (e.pointerType !== 'mouse') focusLast();
        }
    });
    return (0, $19S5E$reactariautils.mergeProps)(pressProps, {
        onKeyDown: onKeyDown
    });
} //# sourceMappingURL=useDatePickerGroup.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/useDateField.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $c1905b78f6d2f5bf$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/intlStrings.main.js [app-ssr] (ecmascript)");
var $715562ad3b4cced4$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/useDatePickerGroup.main.js [app-ssr] (ecmascript)");
var $lVMtq$reactariafocus = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/node_modules/@react-aria/focus/dist/main.js [app-ssr] (ecmascript)");
var $lVMtq$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $lVMtq$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $lVMtq$reactarialabel = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/label/dist/main.js [app-ssr] (ecmascript)");
var $lVMtq$reactariainteractions = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/node_modules/@react-aria/interactions/dist/main.js [app-ssr] (ecmascript)");
var $lVMtq$reactariaform = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/form/dist/main.js [app-ssr] (ecmascript)");
var $lVMtq$reactariai18n = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/main.js [app-ssr] (ecmascript)");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "hookData", ()=>$4acc2f407c169e55$export$653eddfc964b0f8a);
$parcel$export(module.exports, "roleSymbol", ()=>$4acc2f407c169e55$export$300019f83c56d282);
$parcel$export(module.exports, "focusManagerSymbol", ()=>$4acc2f407c169e55$export$7b3062cd49e80452);
$parcel$export(module.exports, "useDateField", ()=>$4acc2f407c169e55$export$5591b0b878c1a989);
$parcel$export(module.exports, "useTimeField", ()=>$4acc2f407c169e55$export$4c842f6a241dc825);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $4acc2f407c169e55$export$653eddfc964b0f8a = new WeakMap();
const $4acc2f407c169e55$export$300019f83c56d282 = '__role_' + Date.now();
const $4acc2f407c169e55$export$7b3062cd49e80452 = '__focusManager_' + Date.now();
function $4acc2f407c169e55$export$5591b0b878c1a989(props, state, ref) {
    var _state_value;
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = state.displayValidation;
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $lVMtq$reactarialabel.useField)({
        ...props,
        labelElementType: 'span',
        isInvalid: isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let valueOnFocus = (0, $lVMtq$react.useRef)(null);
    let { focusWithinProps: focusWithinProps } = (0, $lVMtq$reactariainteractions.useFocusWithin)({
        ...props,
        onFocusWithin (e) {
            var _props_onFocus;
            valueOnFocus.current = state.value;
            (_props_onFocus = props.onFocus) === null || _props_onFocus === void 0 ? void 0 : _props_onFocus.call(props, e);
        },
        onBlurWithin: (e)=>{
            var _props_onBlur;
            state.confirmPlaceholder();
            if (state.value !== valueOnFocus.current) state.commitValidation();
            (_props_onBlur = props.onBlur) === null || _props_onBlur === void 0 ? void 0 : _props_onBlur.call(props, e);
        },
        onFocusWithinChange: props.onFocusChange
    });
    let stringFormatter = (0, $lVMtq$reactariai18n.useLocalizedStringFormatter)((0, $parcel$interopDefault($c1905b78f6d2f5bf$exports)), '@react-aria/datepicker');
    let message = state.maxGranularity === 'hour' ? 'selectedTimeDescription' : 'selectedDateDescription';
    let field = state.maxGranularity === 'hour' ? 'time' : 'date';
    let description = state.value ? stringFormatter.format(message, {
        [field]: state.formatValue({
            month: 'long'
        })
    }) : '';
    let descProps = (0, $lVMtq$reactariautils.useDescription)(description);
    // If within a date picker or date range picker, the date field will have role="presentation" and an aria-describedby
    // will be passed in that references the value (e.g. entire range). Otherwise, add the field's value description.
    let describedBy = props[$4acc2f407c169e55$export$300019f83c56d282] === 'presentation' ? fieldProps['aria-describedby'] : [
        descProps['aria-describedby'],
        fieldProps['aria-describedby']
    ].filter(Boolean).join(' ') || undefined;
    let propsFocusManager = props[$4acc2f407c169e55$export$7b3062cd49e80452];
    let focusManager = (0, $lVMtq$react.useMemo)(()=>propsFocusManager || (0, $lVMtq$reactariafocus.createFocusManager)(ref), [
        propsFocusManager,
        ref
    ]);
    let groupProps = (0, $715562ad3b4cced4$exports.useDatePickerGroup)(state, ref, props[$4acc2f407c169e55$export$300019f83c56d282] === 'presentation');
    // Pass labels and other information to segments.
    $4acc2f407c169e55$export$653eddfc964b0f8a.set(state, {
        ariaLabel: props['aria-label'],
        ariaLabelledBy: [
            labelProps.id,
            props['aria-labelledby']
        ].filter(Boolean).join(' ') || undefined,
        ariaDescribedBy: describedBy,
        focusManager: focusManager
    });
    let autoFocusRef = (0, $lVMtq$react.useRef)(props.autoFocus);
    // When used within a date picker or date range picker, the field gets role="presentation"
    // rather than role="group". Since the date picker/date range picker already has a role="group"
    // with a label and description, and the segments are already labeled by this as well, this
    // avoids very verbose duplicate announcements.
    let fieldDOMProps;
    if (props[$4acc2f407c169e55$export$300019f83c56d282] === 'presentation') fieldDOMProps = {
        role: 'presentation'
    };
    else fieldDOMProps = (0, $lVMtq$reactariautils.mergeProps)(fieldProps, {
        role: 'group',
        'aria-disabled': props.isDisabled || undefined,
        'aria-describedby': describedBy
    });
    (0, $lVMtq$react.useEffect)(()=>{
        if (autoFocusRef.current) focusManager.focusFirst();
        autoFocusRef.current = false;
    }, [
        focusManager
    ]);
    (0, $lVMtq$reactariautils.useFormReset)(props.inputRef, state.value, state.setValue);
    (0, $lVMtq$reactariaform.useFormValidation)({
        ...props,
        focus () {
            focusManager.focusFirst();
        }
    }, state, props.inputRef);
    let inputProps = {
        type: 'hidden',
        name: props.name,
        value: ((_state_value = state.value) === null || _state_value === void 0 ? void 0 : _state_value.toString()) || '',
        disabled: props.isDisabled
    };
    if (props.validationBehavior === 'native') {
        // Use a hidden <input type="text"> rather than <input type="hidden">
        // so that an empty value blocks HTML form submission when the field is required.
        inputProps.type = 'text';
        inputProps.hidden = true;
        inputProps.required = props.isRequired;
        // Ignore react warning.
        inputProps.onChange = ()=>{};
    }
    let domProps = (0, $lVMtq$reactariautils.filterDOMProps)(props);
    return {
        labelProps: {
            ...labelProps,
            onClick: ()=>{
                focusManager.focusFirst();
            }
        },
        fieldProps: (0, $lVMtq$reactariautils.mergeProps)(domProps, fieldDOMProps, groupProps, focusWithinProps, {
            onKeyDown (e) {
                if (props.onKeyDown) props.onKeyDown(e);
            },
            onKeyUp (e) {
                if (props.onKeyUp) props.onKeyUp(e);
            }
        }),
        inputProps: inputProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
}
function $4acc2f407c169e55$export$4c842f6a241dc825(props, state, ref) {
    var _state_timeValue;
    let res = $4acc2f407c169e55$export$5591b0b878c1a989(props, state, ref);
    res.inputProps.value = ((_state_timeValue = state.timeValue) === null || _state_timeValue === void 0 ? void 0 : _state_timeValue.toString()) || '';
    return res;
} //# sourceMappingURL=useDateField.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/useDatePicker.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $c1905b78f6d2f5bf$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/intlStrings.main.js [app-ssr] (ecmascript)");
var $4acc2f407c169e55$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/useDateField.main.js [app-ssr] (ecmascript)");
var $715562ad3b4cced4$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/useDatePickerGroup.main.js [app-ssr] (ecmascript)");
var $bxHoL$reactariafocus = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/node_modules/@react-aria/focus/dist/main.js [app-ssr] (ecmascript)");
var $bxHoL$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $bxHoL$reactstatelyform = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/form/dist/main.js [app-ssr] (ecmascript)");
var $bxHoL$reactarialabel = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/label/dist/main.js [app-ssr] (ecmascript)");
var $bxHoL$reactariainteractions = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/node_modules/@react-aria/interactions/dist/main.js [app-ssr] (ecmascript)");
var $bxHoL$reactariai18n = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/main.js [app-ssr] (ecmascript)");
var $bxHoL$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useDatePicker", ()=>$e90ae7c26a69c6b1$export$42df105a73306d51);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $e90ae7c26a69c6b1$export$42df105a73306d51(props, state, ref) {
    let buttonId = (0, $bxHoL$reactariautils.useId)();
    let dialogId = (0, $bxHoL$reactariautils.useId)();
    let fieldId = (0, $bxHoL$reactariautils.useId)();
    let stringFormatter = (0, $bxHoL$reactariai18n.useLocalizedStringFormatter)((0, $parcel$interopDefault($c1905b78f6d2f5bf$exports)), '@react-aria/datepicker');
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = state.displayValidation;
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $bxHoL$reactarialabel.useField)({
        ...props,
        labelElementType: 'span',
        isInvalid: isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let groupProps = (0, $715562ad3b4cced4$exports.useDatePickerGroup)(state, ref);
    let labelledBy = fieldProps['aria-labelledby'] || fieldProps.id;
    let { locale: locale } = (0, $bxHoL$reactariai18n.useLocale)();
    let date = state.formatValue(locale, {
        month: 'long'
    });
    let description = date ? stringFormatter.format('selectedDateDescription', {
        date: date
    }) : '';
    let descProps = (0, $bxHoL$reactariautils.useDescription)(description);
    let ariaDescribedBy = [
        descProps['aria-describedby'],
        fieldProps['aria-describedby']
    ].filter(Boolean).join(' ') || undefined;
    let domProps = (0, $bxHoL$reactariautils.filterDOMProps)(props);
    let focusManager = (0, $bxHoL$react.useMemo)(()=>(0, $bxHoL$reactariafocus.createFocusManager)(ref), [
        ref
    ]);
    let { focusWithinProps: focusWithinProps } = (0, $bxHoL$reactariainteractions.useFocusWithin)({
        ...props,
        isDisabled: state.isOpen,
        onBlurWithin: props.onBlur,
        onFocusWithin: props.onFocus,
        onFocusWithinChange: props.onFocusChange
    });
    return {
        groupProps: (0, $bxHoL$reactariautils.mergeProps)(domProps, groupProps, fieldProps, descProps, focusWithinProps, {
            role: 'group',
            'aria-disabled': props.isDisabled || null,
            'aria-labelledby': labelledBy,
            'aria-describedby': ariaDescribedBy,
            onKeyDown (e) {
                if (state.isOpen) return;
                if (props.onKeyDown) props.onKeyDown(e);
            },
            onKeyUp (e) {
                if (state.isOpen) return;
                if (props.onKeyUp) props.onKeyUp(e);
            }
        }),
        labelProps: {
            ...labelProps,
            onClick: ()=>{
                focusManager.focusFirst();
            }
        },
        fieldProps: {
            ...fieldProps,
            id: fieldId,
            [(0, $4acc2f407c169e55$exports.roleSymbol)]: 'presentation',
            'aria-describedby': ariaDescribedBy,
            value: state.value,
            onChange: state.setValue,
            placeholderValue: props.placeholderValue,
            hideTimeZone: props.hideTimeZone,
            hourCycle: props.hourCycle,
            shouldForceLeadingZeros: props.shouldForceLeadingZeros,
            granularity: props.granularity,
            isDisabled: props.isDisabled,
            isReadOnly: props.isReadOnly,
            isRequired: props.isRequired,
            validationBehavior: props.validationBehavior,
            // DatePicker owns the validation state for the date field.
            [(0, $bxHoL$reactstatelyform.privateValidationStateProp)]: state,
            autoFocus: props.autoFocus,
            name: props.name
        },
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        buttonProps: {
            ...descProps,
            id: buttonId,
            'aria-haspopup': 'dialog',
            'aria-label': stringFormatter.format('calendar'),
            'aria-labelledby': `${buttonId} ${labelledBy}`,
            'aria-describedby': ariaDescribedBy,
            'aria-expanded': state.isOpen,
            isDisabled: props.isDisabled || props.isReadOnly,
            onPress: ()=>state.setOpen(true)
        },
        dialogProps: {
            id: dialogId,
            'aria-labelledby': `${buttonId} ${labelledBy}`
        },
        calendarProps: {
            autoFocus: true,
            value: state.dateValue,
            onChange: state.setDateValue,
            minValue: props.minValue,
            maxValue: props.maxValue,
            isDisabled: props.isDisabled,
            isReadOnly: props.isReadOnly,
            isDateUnavailable: props.isDateUnavailable,
            defaultFocusedValue: state.dateValue ? undefined : props.placeholderValue,
            isInvalid: state.isInvalid,
            errorMessage: typeof props.errorMessage === 'function' ? props.errorMessage(state.displayValidation) : props.errorMessage || state.displayValidation.validationErrors.join(' ')
        },
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
} //# sourceMappingURL=useDatePicker.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/useDisplayNames.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $c1905b78f6d2f5bf$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/intlStrings.main.js [app-ssr] (ecmascript)");
var $2nNUW$reactariai18n = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/main.js [app-ssr] (ecmascript)");
var $2nNUW$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useDisplayNames", ()=>$934ac650a0aceb4b$export$d42c60378c8168f8);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // @ts-ignore
function $934ac650a0aceb4b$export$d42c60378c8168f8() {
    let { locale: locale } = (0, $2nNUW$reactariai18n.useLocale)();
    let dictionary = (0, $2nNUW$reactariai18n.useLocalizedStringDictionary)((0, $parcel$interopDefault($c1905b78f6d2f5bf$exports)), '@react-aria/datepicker');
    return (0, $2nNUW$react.useMemo)(()=>{
        // Try to use Intl.DisplayNames if possible. It may be supported in browsers, but not support the dateTimeField
        // type as that was only added in v2. https://github.com/tc39/intl-displaynames-v2
        try {
            return new Intl.DisplayNames(locale, {
                type: 'dateTimeField'
            });
        } catch  {
            return new $934ac650a0aceb4b$var$DisplayNamesPolyfill(locale, dictionary);
        }
    }, [
        locale,
        dictionary
    ]);
}
class $934ac650a0aceb4b$var$DisplayNamesPolyfill {
    of(field) {
        return this.dictionary.getStringForLocale(field, this.locale);
    }
    constructor(locale, dictionary){
        this.locale = locale;
        this.dictionary = dictionary;
    }
} //# sourceMappingURL=useDisplayNames.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/useDateSegment.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $4acc2f407c169e55$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/useDateField.main.js [app-ssr] (ecmascript)");
var $934ac650a0aceb4b$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/useDisplayNames.main.js [app-ssr] (ecmascript)");
var $5Tgzj$internationalizeddate = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/date/dist/main.js [app-ssr] (ecmascript)");
var $5Tgzj$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $5Tgzj$internationalizednumber = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/number/dist/main.js [app-ssr] (ecmascript)");
var $5Tgzj$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $5Tgzj$reactariai18n = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/main.js [app-ssr] (ecmascript)");
var $5Tgzj$reactariaspinbutton = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/main.js [app-ssr] (ecmascript)");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useDateSegment", ()=>$5c015c6316d1904d$export$1315d136e6f7581);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $5c015c6316d1904d$export$1315d136e6f7581(segment, state, ref) {
    let enteredKeys = (0, $5Tgzj$react.useRef)('');
    let { locale: locale } = (0, $5Tgzj$reactariai18n.useLocale)();
    let displayNames = (0, $934ac650a0aceb4b$exports.useDisplayNames)();
    let { ariaLabel: ariaLabel, ariaLabelledBy: ariaLabelledBy, ariaDescribedBy: ariaDescribedBy, focusManager: focusManager } = (0, $4acc2f407c169e55$exports.hookData).get(state);
    let textValue = segment.isPlaceholder ? '' : segment.text;
    let options = (0, $5Tgzj$react.useMemo)(()=>state.dateFormatter.resolvedOptions(), [
        state.dateFormatter
    ]);
    let monthDateFormatter = (0, $5Tgzj$reactariai18n.useDateFormatter)({
        month: 'long',
        timeZone: options.timeZone
    });
    let hourDateFormatter = (0, $5Tgzj$reactariai18n.useDateFormatter)({
        hour: 'numeric',
        hour12: options.hour12,
        timeZone: options.timeZone
    });
    if (segment.type === 'month' && !segment.isPlaceholder) {
        let monthTextValue = monthDateFormatter.format(state.dateValue);
        textValue = monthTextValue !== textValue ? `${textValue} \u{2013} ${monthTextValue}` : monthTextValue;
    } else if (segment.type === 'hour' && !segment.isPlaceholder) textValue = hourDateFormatter.format(state.dateValue);
    let { spinButtonProps: spinButtonProps } = (0, $5Tgzj$reactariaspinbutton.useSpinButton)({
        // The ARIA spec says aria-valuenow is optional if there's no value, but aXe seems to require it.
        // This doesn't seem to have any negative effects with real AT since we also use aria-valuetext.
        // https://github.com/dequelabs/axe-core/issues/3505
        value: segment.value,
        textValue: textValue,
        minValue: segment.minValue,
        maxValue: segment.maxValue,
        isDisabled: state.isDisabled,
        isReadOnly: state.isReadOnly || !segment.isEditable,
        isRequired: state.isRequired,
        onIncrement: ()=>{
            enteredKeys.current = '';
            state.increment(segment.type);
        },
        onDecrement: ()=>{
            enteredKeys.current = '';
            state.decrement(segment.type);
        },
        onIncrementPage: ()=>{
            enteredKeys.current = '';
            state.incrementPage(segment.type);
        },
        onDecrementPage: ()=>{
            enteredKeys.current = '';
            state.decrementPage(segment.type);
        },
        onIncrementToMax: ()=>{
            enteredKeys.current = '';
            if (segment.maxValue !== undefined) state.setSegment(segment.type, segment.maxValue);
        },
        onDecrementToMin: ()=>{
            enteredKeys.current = '';
            if (segment.minValue !== undefined) state.setSegment(segment.type, segment.minValue);
        }
    });
    let parser = (0, $5Tgzj$react.useMemo)(()=>new (0, $5Tgzj$internationalizednumber.NumberParser)(locale, {
            maximumFractionDigits: 0
        }), [
        locale
    ]);
    let backspace = ()=>{
        if (segment.text === segment.placeholder) focusManager.focusPrevious();
        if (parser.isValidPartialNumber(segment.text) && !state.isReadOnly && !segment.isPlaceholder) {
            let newValue = segment.text.slice(0, -1);
            let parsed = parser.parse(newValue);
            newValue = parsed === 0 ? '' : newValue;
            if (newValue.length === 0 || parsed === 0) state.clearSegment(segment.type);
            else state.setSegment(segment.type, parsed);
            enteredKeys.current = newValue;
        } else if (segment.type === 'dayPeriod') state.clearSegment(segment.type);
    };
    let onKeyDown = (e)=>{
        // Firefox does not fire selectstart for Ctrl/Cmd + A
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1742153
        if (e.key === 'a' && ((0, $5Tgzj$reactariautils.isMac)() ? e.metaKey : e.ctrlKey)) e.preventDefault();
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
        switch(e.key){
            case 'Backspace':
            case 'Delete':
                // Safari on iOS does not fire beforeinput for the backspace key because the cursor is at the start.
                e.preventDefault();
                e.stopPropagation();
                backspace();
                break;
        }
    };
    // Safari dayPeriod option doesn't work...
    let { startsWith: startsWith } = (0, $5Tgzj$reactariai18n.useFilter)({
        sensitivity: 'base'
    });
    let amPmFormatter = (0, $5Tgzj$reactariai18n.useDateFormatter)({
        hour: 'numeric',
        hour12: true
    });
    let am = (0, $5Tgzj$react.useMemo)(()=>{
        let date = new Date();
        date.setHours(0);
        return amPmFormatter.formatToParts(date).find((part)=>part.type === 'dayPeriod').value;
    }, [
        amPmFormatter
    ]);
    let pm = (0, $5Tgzj$react.useMemo)(()=>{
        let date = new Date();
        date.setHours(12);
        return amPmFormatter.formatToParts(date).find((part)=>part.type === 'dayPeriod').value;
    }, [
        amPmFormatter
    ]);
    // Get a list of formatted era names so users can type the first character to choose one.
    let eraFormatter = (0, $5Tgzj$reactariai18n.useDateFormatter)({
        year: 'numeric',
        era: 'narrow',
        timeZone: 'UTC'
    });
    let eras = (0, $5Tgzj$react.useMemo)(()=>{
        if (segment.type !== 'era') return [];
        let date = (0, $5Tgzj$internationalizeddate.toCalendar)(new (0, $5Tgzj$internationalizeddate.CalendarDate)(1, 1, 1), state.calendar);
        let eras = state.calendar.getEras().map((era)=>{
            let eraDate = date.set({
                year: 1,
                month: 1,
                day: 1,
                era: era
            }).toDate('UTC');
            let parts = eraFormatter.formatToParts(eraDate);
            let formatted = parts.find((p)=>p.type === 'era').value;
            return {
                era: era,
                formatted: formatted
            };
        });
        // Remove the common prefix from formatted values. This is so that in calendars with eras like
        // ERA0 and ERA1 (e.g. Ethiopic), users can press "0" and "1" to select an era. In other cases,
        // the first letter is used.
        let prefixLength = $5c015c6316d1904d$var$commonPrefixLength(eras.map((era)=>era.formatted));
        if (prefixLength) for (let era of eras)era.formatted = era.formatted.slice(prefixLength);
        return eras;
    }, [
        eraFormatter,
        state.calendar,
        segment.type
    ]);
    let onInput = (key)=>{
        if (state.isDisabled || state.isReadOnly) return;
        let newValue = enteredKeys.current + key;
        switch(segment.type){
            case 'dayPeriod':
                if (startsWith(am, key)) state.setSegment('dayPeriod', 0);
                else if (startsWith(pm, key)) state.setSegment('dayPeriod', 12);
                else break;
                focusManager.focusNext();
                break;
            case 'era':
                {
                    let matched = eras.find((e)=>startsWith(e.formatted, key));
                    if (matched) {
                        state.setSegment('era', matched.era);
                        focusManager.focusNext();
                    }
                    break;
                }
            case 'day':
            case 'hour':
            case 'minute':
            case 'second':
            case 'month':
            case 'year':
                {
                    if (!parser.isValidPartialNumber(newValue)) return;
                    let numberValue = parser.parse(newValue);
                    let segmentValue = numberValue;
                    let allowsZero = segment.minValue === 0;
                    if (segment.type === 'hour' && state.dateFormatter.resolvedOptions().hour12) {
                        switch(state.dateFormatter.resolvedOptions().hourCycle){
                            case 'h11':
                                if (numberValue > 11) segmentValue = parser.parse(key);
                                break;
                            case 'h12':
                                allowsZero = false;
                                if (numberValue > 12) segmentValue = parser.parse(key);
                                break;
                        }
                        if (segment.value !== undefined && segment.value >= 12 && numberValue > 1) numberValue += 12;
                    } else if (segment.maxValue !== undefined && numberValue > segment.maxValue) segmentValue = parser.parse(key);
                    if (isNaN(numberValue)) return;
                    let shouldSetValue = segmentValue !== 0 || allowsZero;
                    if (shouldSetValue) state.setSegment(segment.type, segmentValue);
                    if (segment.maxValue !== undefined && (Number(numberValue + '0') > segment.maxValue || newValue.length >= String(segment.maxValue).length)) {
                        enteredKeys.current = '';
                        if (shouldSetValue) focusManager.focusNext();
                    } else enteredKeys.current = newValue;
                    break;
                }
        }
    };
    let onFocus = ()=>{
        enteredKeys.current = '';
        if (ref.current) (0, $5Tgzj$reactariautils.scrollIntoViewport)(ref.current, {
            containingElement: (0, $5Tgzj$reactariautils.getScrollParent)(ref.current)
        });
        // Collapse selection to start or Chrome won't fire input events.
        let selection = window.getSelection();
        selection === null || selection === void 0 ? void 0 : selection.collapse(ref.current);
    };
    let documentRef = (0, $5Tgzj$react.useRef)(typeof document !== 'undefined' ? document : null);
    (0, $5Tgzj$reactariautils.useEvent)(documentRef, 'selectionchange', ()=>{
        var _ref_current;
        // Enforce that the selection is collapsed when inside a date segment.
        // Otherwise, when tapping on a segment in Android Chrome and then entering text,
        // composition events will be fired that break the DOM structure and crash the page.
        let selection = window.getSelection();
        if ((selection === null || selection === void 0 ? void 0 : selection.anchorNode) && ((_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.contains(selection === null || selection === void 0 ? void 0 : selection.anchorNode))) selection.collapse(ref.current);
    });
    let compositionRef = (0, $5Tgzj$react.useRef)('');
    (0, $5Tgzj$reactariautils.useEvent)(ref, 'beforeinput', (e)=>{
        if (!ref.current) return;
        e.preventDefault();
        switch(e.inputType){
            case 'deleteContentBackward':
            case 'deleteContentForward':
                if (parser.isValidPartialNumber(segment.text) && !state.isReadOnly) backspace();
                break;
            case 'insertCompositionText':
                // insertCompositionText cannot be canceled.
                // Record the current state of the element so we can restore it in the `input` event below.
                compositionRef.current = ref.current.textContent;
                // Safari gets stuck in a composition state unless we also assign to the value here.
                // eslint-disable-next-line no-self-assign
                ref.current.textContent = ref.current.textContent;
                break;
            default:
                if (e.data != null) onInput(e.data);
                break;
        }
    });
    (0, $5Tgzj$reactariautils.useEvent)(ref, 'input', (e)=>{
        let { inputType: inputType, data: data } = e;
        switch(inputType){
            case 'insertCompositionText':
                // Reset the DOM to how it was in the beforeinput event.
                if (ref.current) ref.current.textContent = compositionRef.current;
                // Android sometimes fires key presses of letters as composition events. Need to handle am/pm keys here too.
                // Can also happen e.g. with Pinyin keyboard on iOS.
                if (data != null && (startsWith(am, data) || startsWith(pm, data))) onInput(data);
                break;
        }
    });
    (0, $5Tgzj$reactariautils.useLayoutEffect)(()=>{
        let element = ref.current;
        return ()=>{
            // If the focused segment is removed, focus the previous one, or the next one if there was no previous one.
            if (document.activeElement === element) {
                let prev = focusManager.focusPrevious();
                if (!prev) focusManager.focusNext();
            }
        };
    }, [
        ref,
        focusManager
    ]);
    // spinbuttons cannot be focused with VoiceOver on iOS.
    let touchPropOverrides = (0, $5Tgzj$reactariautils.isIOS)() || segment.type === 'timeZoneName' ? {
        role: 'textbox',
        'aria-valuemax': null,
        'aria-valuemin': null,
        'aria-valuetext': null,
        'aria-valuenow': null
    } : {};
    // Only apply aria-describedby to the first segment, unless the field is invalid. This avoids it being
    // read every time the user navigates to a new segment.
    let firstSegment = (0, $5Tgzj$react.useMemo)(()=>state.segments.find((s)=>s.isEditable), [
        state.segments
    ]);
    if (segment !== firstSegment && !state.isInvalid) ariaDescribedBy = undefined;
    let id = (0, $5Tgzj$reactariautils.useId)();
    let isEditable = !state.isDisabled && !state.isReadOnly && segment.isEditable;
    // Prepend the label passed from the field to each segment name.
    // This is needed because VoiceOver on iOS does not announce groups.
    let name = segment.type === 'literal' ? '' : displayNames.of(segment.type);
    let labelProps = (0, $5Tgzj$reactariautils.useLabels)({
        'aria-label': `${name}${ariaLabel ? `, ${ariaLabel}` : ''}${ariaLabelledBy ? ', ' : ''}`,
        'aria-labelledby': ariaLabelledBy
    });
    // Literal segments should not be visible to screen readers. We don't really need any of the above,
    // but the rules of hooks mean hooks cannot be conditional so we have to put this condition here.
    if (segment.type === 'literal') return {
        segmentProps: {
            'aria-hidden': true
        }
    };
    return {
        segmentProps: (0, $5Tgzj$reactariautils.mergeProps)(spinButtonProps, labelProps, {
            id: id,
            ...touchPropOverrides,
            'aria-invalid': state.isInvalid ? 'true' : undefined,
            'aria-describedby': ariaDescribedBy,
            'aria-readonly': state.isReadOnly || !segment.isEditable ? 'true' : undefined,
            'data-placeholder': segment.isPlaceholder || undefined,
            contentEditable: isEditable,
            suppressContentEditableWarning: isEditable,
            spellCheck: isEditable ? 'false' : undefined,
            autoCorrect: isEditable ? 'off' : undefined,
            // Capitalization was changed in React 17...
            [parseInt((0, $parcel$interopDefault($5Tgzj$react)).version, 10) >= 17 ? 'enterKeyHint' : 'enterkeyhint']: isEditable ? 'next' : undefined,
            inputMode: state.isDisabled || segment.type === 'dayPeriod' || segment.type === 'era' || !isEditable ? undefined : 'numeric',
            tabIndex: state.isDisabled ? undefined : 0,
            onKeyDown: onKeyDown,
            onFocus: onFocus,
            style: {
                caretColor: 'transparent'
            },
            // Prevent pointer events from reaching useDatePickerGroup, and allow native browser behavior to focus the segment.
            onPointerDown (e) {
                e.stopPropagation();
            },
            onMouseDown (e) {
                e.stopPropagation();
            }
        })
    };
}
function $5c015c6316d1904d$var$commonPrefixLength(strings) {
    // Sort the strings, and compare the characters in the first and last to find the common prefix.
    strings.sort();
    let first = strings[0];
    let last = strings[strings.length - 1];
    for(let i = 0; i < first.length; i++){
        if (first[i] !== last[i]) return i;
    }
    return 0;
} //# sourceMappingURL=useDateSegment.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/useDateRangePicker.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $4acc2f407c169e55$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/useDateField.main.js [app-ssr] (ecmascript)");
var $c1905b78f6d2f5bf$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/intlStrings.main.js [app-ssr] (ecmascript)");
var $715562ad3b4cced4$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/useDatePickerGroup.main.js [app-ssr] (ecmascript)");
var $Xt1Bd$reactariafocus = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/node_modules/@react-aria/focus/dist/main.js [app-ssr] (ecmascript)");
var $Xt1Bd$reactstatelyform = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/form/dist/main.js [app-ssr] (ecmascript)");
var $Xt1Bd$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $Xt1Bd$reactarialabel = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/label/dist/main.js [app-ssr] (ecmascript)");
var $Xt1Bd$reactariainteractions = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/node_modules/@react-aria/interactions/dist/main.js [app-ssr] (ecmascript)");
var $Xt1Bd$reactariai18n = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/main.js [app-ssr] (ecmascript)");
var $Xt1Bd$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useDateRangePicker", ()=>$20f695b1b69e6b9e$export$12fd5f0e9f4bb192);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $20f695b1b69e6b9e$export$12fd5f0e9f4bb192(props, state, ref) {
    var _state_value, _state_value1, _state_dateRange;
    let stringFormatter = (0, $Xt1Bd$reactariai18n.useLocalizedStringFormatter)((0, $parcel$interopDefault($c1905b78f6d2f5bf$exports)), '@react-aria/datepicker');
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = state.displayValidation;
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $Xt1Bd$reactarialabel.useField)({
        ...props,
        labelElementType: 'span',
        isInvalid: isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let labelledBy = fieldProps['aria-labelledby'] || fieldProps.id;
    let { locale: locale } = (0, $Xt1Bd$reactariai18n.useLocale)();
    let range = state.formatValue(locale, {
        month: 'long'
    });
    let description = range ? stringFormatter.format('selectedRangeDescription', {
        startDate: range.start,
        endDate: range.end
    }) : '';
    let descProps = (0, $Xt1Bd$reactariautils.useDescription)(description);
    let startFieldProps = {
        'aria-label': stringFormatter.format('startDate'),
        'aria-labelledby': labelledBy
    };
    let endFieldProps = {
        'aria-label': stringFormatter.format('endDate'),
        'aria-labelledby': labelledBy
    };
    let buttonId = (0, $Xt1Bd$reactariautils.useId)();
    let dialogId = (0, $Xt1Bd$reactariautils.useId)();
    let groupProps = (0, $715562ad3b4cced4$exports.useDatePickerGroup)(state, ref);
    let ariaDescribedBy = [
        descProps['aria-describedby'],
        fieldProps['aria-describedby']
    ].filter(Boolean).join(' ') || undefined;
    let focusManager = (0, $Xt1Bd$react.useMemo)(()=>(0, $Xt1Bd$reactariafocus.createFocusManager)(ref, {
            // Exclude the button from the focus manager.
            accept: (element)=>element.id !== buttonId
        }), [
        ref,
        buttonId
    ]);
    let commonFieldProps = {
        [(0, $4acc2f407c169e55$exports.focusManagerSymbol)]: focusManager,
        [(0, $4acc2f407c169e55$exports.roleSymbol)]: 'presentation',
        'aria-describedby': ariaDescribedBy,
        placeholderValue: props.placeholderValue,
        hideTimeZone: props.hideTimeZone,
        hourCycle: props.hourCycle,
        granularity: props.granularity,
        shouldForceLeadingZeros: props.shouldForceLeadingZeros,
        isDisabled: props.isDisabled,
        isReadOnly: props.isReadOnly,
        isRequired: props.isRequired,
        validationBehavior: props.validationBehavior
    };
    let domProps = (0, $Xt1Bd$reactariautils.filterDOMProps)(props);
    let { focusWithinProps: focusWithinProps } = (0, $Xt1Bd$reactariainteractions.useFocusWithin)({
        ...props,
        isDisabled: state.isOpen,
        onBlurWithin: props.onBlur,
        onFocusWithin: props.onFocus,
        onFocusWithinChange: props.onFocusChange
    });
    let startFieldValidation = (0, $Xt1Bd$react.useRef)((0, $Xt1Bd$reactstatelyform.DEFAULT_VALIDATION_RESULT));
    let endFieldValidation = (0, $Xt1Bd$react.useRef)((0, $Xt1Bd$reactstatelyform.DEFAULT_VALIDATION_RESULT));
    var _state_value_start, _state_value_end;
    return {
        groupProps: (0, $Xt1Bd$reactariautils.mergeProps)(domProps, groupProps, fieldProps, descProps, focusWithinProps, {
            role: 'group',
            'aria-disabled': props.isDisabled || null,
            'aria-describedby': ariaDescribedBy,
            onKeyDown (e) {
                if (state.isOpen) return;
                if (props.onKeyDown) props.onKeyDown(e);
            },
            onKeyUp (e) {
                if (state.isOpen) return;
                if (props.onKeyUp) props.onKeyUp(e);
            }
        }),
        labelProps: {
            ...labelProps,
            onClick: ()=>{
                focusManager.focusFirst();
            }
        },
        buttonProps: {
            ...descProps,
            id: buttonId,
            'aria-haspopup': 'dialog',
            'aria-label': stringFormatter.format('calendar'),
            'aria-labelledby': `${buttonId} ${labelledBy}`,
            'aria-describedby': ariaDescribedBy,
            'aria-expanded': state.isOpen,
            isDisabled: props.isDisabled || props.isReadOnly,
            onPress: ()=>state.setOpen(true)
        },
        dialogProps: {
            id: dialogId,
            'aria-labelledby': `${buttonId} ${labelledBy}`
        },
        startFieldProps: {
            ...startFieldProps,
            ...commonFieldProps,
            value: (_state_value_start = (_state_value = state.value) === null || _state_value === void 0 ? void 0 : _state_value.start) !== null && _state_value_start !== void 0 ? _state_value_start : null,
            onChange: (start)=>state.setDateTime('start', start),
            autoFocus: props.autoFocus,
            name: props.startName,
            [(0, $Xt1Bd$reactstatelyform.privateValidationStateProp)]: {
                realtimeValidation: state.realtimeValidation,
                displayValidation: state.displayValidation,
                updateValidation (e) {
                    startFieldValidation.current = e;
                    state.updateValidation((0, $Xt1Bd$reactstatelyform.mergeValidation)(e, endFieldValidation.current));
                },
                resetValidation: state.resetValidation,
                commitValidation: state.commitValidation
            }
        },
        endFieldProps: {
            ...endFieldProps,
            ...commonFieldProps,
            value: (_state_value_end = (_state_value1 = state.value) === null || _state_value1 === void 0 ? void 0 : _state_value1.end) !== null && _state_value_end !== void 0 ? _state_value_end : null,
            onChange: (end)=>state.setDateTime('end', end),
            name: props.endName,
            [(0, $Xt1Bd$reactstatelyform.privateValidationStateProp)]: {
                realtimeValidation: state.realtimeValidation,
                displayValidation: state.displayValidation,
                updateValidation (e) {
                    endFieldValidation.current = e;
                    state.updateValidation((0, $Xt1Bd$reactstatelyform.mergeValidation)(startFieldValidation.current, e));
                },
                resetValidation: state.resetValidation,
                commitValidation: state.commitValidation
            }
        },
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        calendarProps: {
            autoFocus: true,
            value: ((_state_dateRange = state.dateRange) === null || _state_dateRange === void 0 ? void 0 : _state_dateRange.start) && state.dateRange.end ? state.dateRange : null,
            onChange: state.setDateRange,
            minValue: props.minValue,
            maxValue: props.maxValue,
            isDisabled: props.isDisabled,
            isReadOnly: props.isReadOnly,
            isDateUnavailable: props.isDateUnavailable,
            allowsNonContiguousRanges: props.allowsNonContiguousRanges,
            defaultFocusedValue: state.dateRange ? undefined : props.placeholderValue,
            isInvalid: state.isInvalid,
            errorMessage: typeof props.errorMessage === 'function' ? props.errorMessage(state.displayValidation) : props.errorMessage || state.displayValidation.validationErrors.join(' ')
        },
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
} //# sourceMappingURL=useDateRangePicker.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $e90ae7c26a69c6b1$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/useDatePicker.main.js [app-ssr] (ecmascript)");
var $5c015c6316d1904d$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/useDateSegment.main.js [app-ssr] (ecmascript)");
var $4acc2f407c169e55$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/useDateField.main.js [app-ssr] (ecmascript)");
var $20f695b1b69e6b9e$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/useDateRangePicker.main.js [app-ssr] (ecmascript)");
var $934ac650a0aceb4b$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/dist/useDisplayNames.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useDatePicker", ()=>$e90ae7c26a69c6b1$exports.useDatePicker);
$parcel$export(module.exports, "useDateSegment", ()=>$5c015c6316d1904d$exports.useDateSegment);
$parcel$export(module.exports, "useDateField", ()=>$4acc2f407c169e55$exports.useDateField);
$parcel$export(module.exports, "useTimeField", ()=>$4acc2f407c169e55$exports.useTimeField);
$parcel$export(module.exports, "useDateRangePicker", ()=>$20f695b1b69e6b9e$exports.useDateRangePicker);
$parcel$export(module.exports, "useDisplayNames", ()=>$934ac650a0aceb4b$exports.useDisplayNames); /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */  //# sourceMappingURL=main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/ar-AE.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `\u{641}\u{627}\u{631}\u{63A}`
}; //# sourceMappingURL=ar-AE.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/bg-BG.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `\u{418}\u{437}\u{43F}\u{440}\u{430}\u{437}\u{43D}\u{438}`
}; //# sourceMappingURL=bg-BG.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/cs-CZ.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `Pr\xe1zdn\xe9`
}; //# sourceMappingURL=cs-CZ.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/da-DK.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `Tom`
}; //# sourceMappingURL=da-DK.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/de-DE.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `Leer`
}; //# sourceMappingURL=de-DE.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/el-GR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `\u{386}\u{3B4}\u{3B5}\u{3B9}\u{3BF}`
}; //# sourceMappingURL=el-GR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/en-US.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `Empty`
}; //# sourceMappingURL=en-US.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/es-ES.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `Vac\xedo`
}; //# sourceMappingURL=es-ES.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/et-EE.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `T\xfchjenda`
}; //# sourceMappingURL=et-EE.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/fi-FI.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `Tyhj\xe4`
}; //# sourceMappingURL=fi-FI.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/fr-FR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `Vide`
}; //# sourceMappingURL=fr-FR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/he-IL.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `\u{5E8}\u{5D9}\u{5E7}`
}; //# sourceMappingURL=he-IL.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/hr-HR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `Prazno`
}; //# sourceMappingURL=hr-HR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/hu-HU.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `\xdcres`
}; //# sourceMappingURL=hu-HU.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/it-IT.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `Vuoto`
}; //# sourceMappingURL=it-IT.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/ja-JP.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `\u{7A7A}`
}; //# sourceMappingURL=ja-JP.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/ko-KR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `\u{BE44}\u{C5B4} \u{C788}\u{C74C}`
}; //# sourceMappingURL=ko-KR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/lt-LT.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `Tu\u{161}\u{10D}ias`
}; //# sourceMappingURL=lt-LT.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/lv-LV.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `Tuk\u{161}s`
}; //# sourceMappingURL=lv-LV.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/nb-NO.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `Tom`
}; //# sourceMappingURL=nb-NO.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/nl-NL.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `Leeg`
}; //# sourceMappingURL=nl-NL.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/pl-PL.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `Pusty`
}; //# sourceMappingURL=pl-PL.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/pt-BR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `Vazio`
}; //# sourceMappingURL=pt-BR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/pt-PT.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `Vazio`
}; //# sourceMappingURL=pt-PT.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/ro-RO.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `Gol`
}; //# sourceMappingURL=ro-RO.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/ru-RU.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `\u{41D}\u{435} \u{437}\u{430}\u{43F}\u{43E}\u{43B}\u{43D}\u{435}\u{43D}\u{43E}`
}; //# sourceMappingURL=ru-RU.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/sk-SK.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `Pr\xe1zdne`
}; //# sourceMappingURL=sk-SK.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/sl-SI.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `Prazen`
}; //# sourceMappingURL=sl-SI.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/sr-SP.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `Prazno`
}; //# sourceMappingURL=sr-SP.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/sv-SE.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `Tomt`
}; //# sourceMappingURL=sv-SE.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/tr-TR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `Bo\u{15F}`
}; //# sourceMappingURL=tr-TR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/uk-UA.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `\u{41F}\u{443}\u{441}\u{442}\u{43E}`
}; //# sourceMappingURL=uk-UA.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/zh-CN.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `\u{7A7A}`
}; //# sourceMappingURL=zh-CN.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/zh-TW.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "Empty": `\u{7A7A}\u{767D}`
}; //# sourceMappingURL=zh-TW.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/intlStrings.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $db6c23092fbfea22$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/ar-AE.main.js [app-ssr] (ecmascript)");
var $f4b3121a918895c4$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/bg-BG.main.js [app-ssr] (ecmascript)");
var $d01cc02a83842f4c$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/cs-CZ.main.js [app-ssr] (ecmascript)");
var $ae20f188998ad249$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/da-DK.main.js [app-ssr] (ecmascript)");
var $f17ee93fe12c77e5$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/de-DE.main.js [app-ssr] (ecmascript)");
var $9691dc6a69dd5ba9$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/el-GR.main.js [app-ssr] (ecmascript)");
var $b2385949437f9917$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/en-US.main.js [app-ssr] (ecmascript)");
var $ed6d4429037ec60d$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/es-ES.main.js [app-ssr] (ecmascript)");
var $c9cb32f5c221f118$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/et-EE.main.js [app-ssr] (ecmascript)");
var $5be8f6c4ad248dda$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/fi-FI.main.js [app-ssr] (ecmascript)");
var $3f46a428519ddd7e$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/fr-FR.main.js [app-ssr] (ecmascript)");
var $41c7f98604688f35$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/he-IL.main.js [app-ssr] (ecmascript)");
var $183e97db82c2cbf0$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/hr-HR.main.js [app-ssr] (ecmascript)");
var $749cae0664a7dc03$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/hu-HU.main.js [app-ssr] (ecmascript)");
var $4129f25b282c341e$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/it-IT.main.js [app-ssr] (ecmascript)");
var $908925465e00dbfc$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/ja-JP.main.js [app-ssr] (ecmascript)");
var $34fae452e2e356d9$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/ko-KR.main.js [app-ssr] (ecmascript)");
var $458e73ba0e56bdd4$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/lt-LT.main.js [app-ssr] (ecmascript)");
var $2ddf9ecf84010f95$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/lv-LV.main.js [app-ssr] (ecmascript)");
var $b787a09821b773ea$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/nb-NO.main.js [app-ssr] (ecmascript)");
var $6b951cc1b0de6d71$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/nl-NL.main.js [app-ssr] (ecmascript)");
var $fc3eb600d1c488fa$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/pl-PL.main.js [app-ssr] (ecmascript)");
var $ba0f4e25830e4bbf$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/pt-BR.main.js [app-ssr] (ecmascript)");
var $2cd34c446640bd1d$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/pt-PT.main.js [app-ssr] (ecmascript)");
var $55c7bf6cdae0bed5$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/ro-RO.main.js [app-ssr] (ecmascript)");
var $240e8ca0b043d76a$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/ru-RU.main.js [app-ssr] (ecmascript)");
var $c28c7ecdb94a1868$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/sk-SK.main.js [app-ssr] (ecmascript)");
var $c2d6776ba29b6517$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/sl-SI.main.js [app-ssr] (ecmascript)");
var $628464d96d5a7855$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/sr-SP.main.js [app-ssr] (ecmascript)");
var $5a1bcd0a675a6f60$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/sv-SE.main.js [app-ssr] (ecmascript)");
var $f71e9bc82e4a5a16$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/tr-TR.main.js [app-ssr] (ecmascript)");
var $cb1ece2578f5693e$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/uk-UA.main.js [app-ssr] (ecmascript)");
var $d8ce7cc5e4398a80$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/zh-CN.main.js [app-ssr] (ecmascript)");
var $8db5191ec1aacb53$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/zh-TW.main.js [app-ssr] (ecmascript)");
module.exports = {
    "ar-AE": $db6c23092fbfea22$exports,
    "bg-BG": $f4b3121a918895c4$exports,
    "cs-CZ": $d01cc02a83842f4c$exports,
    "da-DK": $ae20f188998ad249$exports,
    "de-DE": $f17ee93fe12c77e5$exports,
    "el-GR": $9691dc6a69dd5ba9$exports,
    "en-US": $b2385949437f9917$exports,
    "es-ES": $ed6d4429037ec60d$exports,
    "et-EE": $c9cb32f5c221f118$exports,
    "fi-FI": $5be8f6c4ad248dda$exports,
    "fr-FR": $3f46a428519ddd7e$exports,
    "he-IL": $41c7f98604688f35$exports,
    "hr-HR": $183e97db82c2cbf0$exports,
    "hu-HU": $749cae0664a7dc03$exports,
    "it-IT": $4129f25b282c341e$exports,
    "ja-JP": $908925465e00dbfc$exports,
    "ko-KR": $34fae452e2e356d9$exports,
    "lt-LT": $458e73ba0e56bdd4$exports,
    "lv-LV": $2ddf9ecf84010f95$exports,
    "nb-NO": $b787a09821b773ea$exports,
    "nl-NL": $6b951cc1b0de6d71$exports,
    "pl-PL": $fc3eb600d1c488fa$exports,
    "pt-BR": $ba0f4e25830e4bbf$exports,
    "pt-PT": $2cd34c446640bd1d$exports,
    "ro-RO": $55c7bf6cdae0bed5$exports,
    "ru-RU": $240e8ca0b043d76a$exports,
    "sk-SK": $c28c7ecdb94a1868$exports,
    "sl-SI": $c2d6776ba29b6517$exports,
    "sr-SP": $628464d96d5a7855$exports,
    "sv-SE": $5a1bcd0a675a6f60$exports,
    "tr-TR": $f71e9bc82e4a5a16$exports,
    "uk-UA": $cb1ece2578f5693e$exports,
    "zh-CN": $d8ce7cc5e4398a80$exports,
    "zh-TW": $8db5191ec1aacb53$exports
}; //# sourceMappingURL=intlStrings.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/useSpinButton.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $cb4b786159079747$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/intlStrings.main.js [app-ssr] (ecmascript)");
var $2pZbw$reactarialiveannouncer = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/live-announcer/dist/main.js [app-ssr] (ecmascript)");
var $2pZbw$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $2pZbw$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $2pZbw$reactariai18n = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n/dist/main.js [app-ssr] (ecmascript)");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useSpinButton", ()=>$37bbd4c129023f61$export$e908e06f4b8e3402);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $37bbd4c129023f61$export$e908e06f4b8e3402(props) {
    const _async = (0, $2pZbw$react.useRef)(undefined);
    let { value: value, textValue: textValue, minValue: minValue, maxValue: maxValue, isDisabled: isDisabled, isReadOnly: isReadOnly, isRequired: isRequired, onIncrement: onIncrement, onIncrementPage: onIncrementPage, onDecrement: onDecrement, onDecrementPage: onDecrementPage, onDecrementToMin: onDecrementToMin, onIncrementToMax: onIncrementToMax } = props;
    const stringFormatter = (0, $2pZbw$reactariai18n.useLocalizedStringFormatter)((0, $parcel$interopDefault($cb4b786159079747$exports)), '@react-aria/spinbutton');
    const clearAsync = ()=>clearTimeout(_async.current);
    (0, $2pZbw$react.useEffect)(()=>{
        return ()=>clearAsync();
    }, []);
    let onKeyDown = (e)=>{
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || isReadOnly || e.nativeEvent.isComposing) return;
        switch(e.key){
            case 'PageUp':
                if (onIncrementPage) {
                    e.preventDefault();
                    onIncrementPage === null || onIncrementPage === void 0 ? void 0 : onIncrementPage();
                    break;
                }
            // fallthrough!
            case 'ArrowUp':
            case 'Up':
                if (onIncrement) {
                    e.preventDefault();
                    onIncrement === null || onIncrement === void 0 ? void 0 : onIncrement();
                }
                break;
            case 'PageDown':
                if (onDecrementPage) {
                    e.preventDefault();
                    onDecrementPage === null || onDecrementPage === void 0 ? void 0 : onDecrementPage();
                    break;
                }
            // fallthrough
            case 'ArrowDown':
            case 'Down':
                if (onDecrement) {
                    e.preventDefault();
                    onDecrement === null || onDecrement === void 0 ? void 0 : onDecrement();
                }
                break;
            case 'Home':
                if (onDecrementToMin) {
                    e.preventDefault();
                    onDecrementToMin === null || onDecrementToMin === void 0 ? void 0 : onDecrementToMin();
                }
                break;
            case 'End':
                if (onIncrementToMax) {
                    e.preventDefault();
                    onIncrementToMax === null || onIncrementToMax === void 0 ? void 0 : onIncrementToMax();
                }
                break;
        }
    };
    let isFocused = (0, $2pZbw$react.useRef)(false);
    let onFocus = ()=>{
        isFocused.current = true;
    };
    let onBlur = ()=>{
        isFocused.current = false;
    };
    // Replace Unicode hyphen-minus (U+002D) with minus sign (U+2212).
    // This ensures that macOS VoiceOver announces it as "minus" even with other characters between the minus sign
    // and the number (e.g. currency symbol). Otherwise it announces nothing because it assumes the character is a hyphen.
    // In addition, replace the empty string with the word "Empty" so that iOS VoiceOver does not read "50%" for an empty field.
    let ariaTextValue = textValue === '' ? stringFormatter.format('Empty') : (textValue || `${value}`).replace('-', '\u2212');
    (0, $2pZbw$react.useEffect)(()=>{
        if (isFocused.current) {
            (0, $2pZbw$reactarialiveannouncer.clearAnnouncer)('assertive');
            (0, $2pZbw$reactarialiveannouncer.announce)(ariaTextValue, 'assertive');
        }
    }, [
        ariaTextValue
    ]);
    const onIncrementPressStart = (0, $2pZbw$reactariautils.useEffectEvent)((initialStepDelay)=>{
        clearAsync();
        onIncrement === null || onIncrement === void 0 ? void 0 : onIncrement();
        // Start spinning after initial delay
        _async.current = window.setTimeout(()=>{
            if (maxValue === undefined || isNaN(maxValue) || value === undefined || isNaN(value) || value < maxValue) onIncrementPressStart(60);
        }, initialStepDelay);
    });
    const onDecrementPressStart = (0, $2pZbw$reactariautils.useEffectEvent)((initialStepDelay)=>{
        clearAsync();
        onDecrement === null || onDecrement === void 0 ? void 0 : onDecrement();
        // Start spinning after initial delay
        _async.current = window.setTimeout(()=>{
            if (minValue === undefined || isNaN(minValue) || value === undefined || isNaN(value) || value > minValue) onDecrementPressStart(60);
        }, initialStepDelay);
    });
    let cancelContextMenu = (e)=>{
        e.preventDefault();
    };
    let { addGlobalListener: addGlobalListener, removeAllGlobalListeners: removeAllGlobalListeners } = (0, $2pZbw$reactariautils.useGlobalListeners)();
    return {
        spinButtonProps: {
            role: 'spinbutton',
            'aria-valuenow': value !== undefined && !isNaN(value) ? value : undefined,
            'aria-valuetext': ariaTextValue,
            'aria-valuemin': minValue,
            'aria-valuemax': maxValue,
            'aria-disabled': isDisabled || undefined,
            'aria-readonly': isReadOnly || undefined,
            'aria-required': isRequired || undefined,
            onKeyDown: onKeyDown,
            onFocus: onFocus,
            onBlur: onBlur
        },
        incrementButtonProps: {
            onPressStart: ()=>{
                onIncrementPressStart(400);
                addGlobalListener(window, 'contextmenu', cancelContextMenu);
            },
            onPressEnd: ()=>{
                clearAsync();
                removeAllGlobalListeners();
            },
            onFocus: onFocus,
            onBlur: onBlur
        },
        decrementButtonProps: {
            onPressStart: ()=>{
                onDecrementPressStart(400);
                addGlobalListener(window, 'contextmenu', cancelContextMenu);
            },
            onPressEnd: ()=>{
                clearAsync();
                removeAllGlobalListeners();
            },
            onFocus: onFocus,
            onBlur: onBlur
        }
    };
} //# sourceMappingURL=useSpinButton.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $37bbd4c129023f61$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/dist/useSpinButton.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useSpinButton", ()=>$37bbd4c129023f61$exports.useSpinButton); /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */  //# sourceMappingURL=main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/live-announcer/dist/LiveAnnouncer.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "announce", ()=>$97cebfa4133ebec3$export$a9b970dcc4ae71a9);
$parcel$export(module.exports, "clearAnnouncer", ()=>$97cebfa4133ebec3$export$d10ae4f68404609a);
$parcel$export(module.exports, "destroyAnnouncer", ()=>$97cebfa4133ebec3$export$d8686216b8b81b2f);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /* Inspired by https://github.com/AlmeroSteyn/react-aria-live */ const $97cebfa4133ebec3$var$LIVEREGION_TIMEOUT_DELAY = 7000;
let $97cebfa4133ebec3$var$liveAnnouncer = null;
function $97cebfa4133ebec3$export$a9b970dcc4ae71a9(message, assertiveness = 'assertive', timeout = $97cebfa4133ebec3$var$LIVEREGION_TIMEOUT_DELAY) {
    if (!$97cebfa4133ebec3$var$liveAnnouncer) {
        $97cebfa4133ebec3$var$liveAnnouncer = new $97cebfa4133ebec3$var$LiveAnnouncer();
        // wait for the live announcer regions to be added to the dom, then announce
        // otherwise Safari won't announce the message if it's added too quickly
        // found most times less than 100ms were not consistent when announcing with Safari
        // IS_REACT_ACT_ENVIRONMENT is used by React 18. Previous versions checked for the `jest` global.
        // https://github.com/reactwg/react-18/discussions/102
        // if we're in a test environment, announce without waiting
        // @ts-ignore
        if (!(typeof IS_REACT_ACT_ENVIRONMENT === 'boolean' ? IS_REACT_ACT_ENVIRONMENT : typeof jest !== 'undefined')) setTimeout(()=>{
            if ($97cebfa4133ebec3$var$liveAnnouncer === null || $97cebfa4133ebec3$var$liveAnnouncer === void 0 ? void 0 : $97cebfa4133ebec3$var$liveAnnouncer.isAttached()) $97cebfa4133ebec3$var$liveAnnouncer === null || $97cebfa4133ebec3$var$liveAnnouncer === void 0 ? void 0 : $97cebfa4133ebec3$var$liveAnnouncer.announce(message, assertiveness, timeout);
        }, 100);
        else $97cebfa4133ebec3$var$liveAnnouncer.announce(message, assertiveness, timeout);
    } else $97cebfa4133ebec3$var$liveAnnouncer.announce(message, assertiveness, timeout);
}
function $97cebfa4133ebec3$export$d10ae4f68404609a(assertiveness) {
    if ($97cebfa4133ebec3$var$liveAnnouncer) $97cebfa4133ebec3$var$liveAnnouncer.clear(assertiveness);
}
function $97cebfa4133ebec3$export$d8686216b8b81b2f() {
    if ($97cebfa4133ebec3$var$liveAnnouncer) {
        $97cebfa4133ebec3$var$liveAnnouncer.destroy();
        $97cebfa4133ebec3$var$liveAnnouncer = null;
    }
}
// LiveAnnouncer is implemented using vanilla DOM, not React. That's because as of React 18
// ReactDOM.render is deprecated, and the replacement, ReactDOM.createRoot is moved into a
// subpath import `react-dom/client`. That makes it hard for us to support multiple React versions.
// As a global API, we can't use portals without introducing a breaking API change. LiveAnnouncer
// is simple enough to implement without React, so that's what we do here.
// See this discussion for more details: https://github.com/reactwg/react-18/discussions/125#discussioncomment-2382638
class $97cebfa4133ebec3$var$LiveAnnouncer {
    isAttached() {
        var _this_node;
        return (_this_node = this.node) === null || _this_node === void 0 ? void 0 : _this_node.isConnected;
    }
    createLog(ariaLive) {
        let node = document.createElement('div');
        node.setAttribute('role', 'log');
        node.setAttribute('aria-live', ariaLive);
        node.setAttribute('aria-relevant', 'additions');
        return node;
    }
    destroy() {
        if (!this.node) return;
        document.body.removeChild(this.node);
        this.node = null;
    }
    announce(message, assertiveness = 'assertive', timeout = $97cebfa4133ebec3$var$LIVEREGION_TIMEOUT_DELAY) {
        var _this_assertiveLog, _this_politeLog;
        if (!this.node) return;
        let node = document.createElement('div');
        if (typeof message === 'object') {
            // To read an aria-labelledby, the element must have an appropriate role, such as img.
            node.setAttribute('role', 'img');
            node.setAttribute('aria-labelledby', message['aria-labelledby']);
        } else node.textContent = message;
        if (assertiveness === 'assertive') (_this_assertiveLog = this.assertiveLog) === null || _this_assertiveLog === void 0 ? void 0 : _this_assertiveLog.appendChild(node);
        else (_this_politeLog = this.politeLog) === null || _this_politeLog === void 0 ? void 0 : _this_politeLog.appendChild(node);
        if (message !== '') setTimeout(()=>{
            node.remove();
        }, timeout);
    }
    clear(assertiveness) {
        if (!this.node) return;
        if ((!assertiveness || assertiveness === 'assertive') && this.assertiveLog) this.assertiveLog.innerHTML = '';
        if ((!assertiveness || assertiveness === 'polite') && this.politeLog) this.politeLog.innerHTML = '';
    }
    constructor(){
        this.node = null;
        this.assertiveLog = null;
        this.politeLog = null;
        if (typeof document !== 'undefined') {
            this.node = document.createElement('div');
            this.node.dataset.liveAnnouncer = 'true';
            // copied from VisuallyHidden
            Object.assign(this.node.style, {
                border: 0,
                clip: 'rect(0 0 0 0)',
                clipPath: 'inset(50%)',
                height: '1px',
                margin: '-1px',
                overflow: 'hidden',
                padding: 0,
                position: 'absolute',
                width: '1px',
                whiteSpace: 'nowrap'
            });
            this.assertiveLog = this.createLog('assertive');
            this.node.appendChild(this.assertiveLog);
            this.politeLog = this.createLog('polite');
            this.node.appendChild(this.politeLog);
            document.body.prepend(this.node);
        }
    }
} //# sourceMappingURL=LiveAnnouncer.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/live-announcer/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $97cebfa4133ebec3$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/live-announcer/dist/LiveAnnouncer.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "announce", ()=>$97cebfa4133ebec3$exports.announce);
$parcel$export(module.exports, "clearAnnouncer", ()=>$97cebfa4133ebec3$exports.clearAnnouncer);
$parcel$export(module.exports, "destroyAnnouncer", ()=>$97cebfa4133ebec3$exports.destroyAnnouncer); /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */  //# sourceMappingURL=main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/ar-AE.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} \u{625}\u{644}\u{649} ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}`,
    "finishRangeSelectionPrompt": `\u{627}\u{646}\u{642}\u{631} \u{644}\u{625}\u{646}\u{647}\u{627}\u{621} \u{639}\u{645}\u{644}\u{64A}\u{629} \u{62A}\u{62D}\u{62F}\u{64A}\u{62F} \u{646}\u{637}\u{627}\u{642} \u{627}\u{644}\u{62A}\u{627}\u{631}\u{64A}\u{62E}`,
    "maximumDate": `\u{622}\u{62E}\u{631} \u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62A}\u{627}\u{62D}`,
    "minimumDate": `\u{623}\u{648}\u{644} \u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62A}\u{627}\u{62D}`,
    "next": `\u{627}\u{644}\u{62A}\u{627}\u{644}\u{64A}`,
    "previous": `\u{627}\u{644}\u{633}\u{627}\u{628}\u{642}`,
    "selectedDateDescription": (args)=>`\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62D}\u{62F}\u{62F}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{627}\u{644}\u{645}\u{62F}\u{649} \u{627}\u{644}\u{632}\u{645}\u{646}\u{64A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{627}\u{646}\u{642}\u{631} \u{644}\u{628}\u{62F}\u{621} \u{639}\u{645}\u{644}\u{64A}\u{629} \u{62A}\u{62D}\u{62F}\u{64A}\u{62F} \u{646}\u{637}\u{627}\u{642} \u{627}\u{644}\u{62A}\u{627}\u{631}\u{64A}\u{62E}`,
    "todayDate": (args)=>`\u{627}\u{644}\u{64A}\u{648}\u{645}\u{60C} ${args.date}`,
    "todayDateSelected": (args)=>`\u{627}\u{644}\u{64A}\u{648}\u{645}\u{60C} ${args.date} \u{645}\u{62D}\u{62F}\u{62F}`
}; //# sourceMappingURL=ar-AE.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/bg-BG.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} \u{434}\u{43E} ${args.endDate}`,
    "dateSelected": (args)=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{435} ${args.date}`,
    "finishRangeSelectionPrompt": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435}, \u{437}\u{430} \u{434}\u{430} \u{434}\u{43E}\u{432}\u{44A}\u{440}\u{448}\u{438}\u{442}\u{435} \u{438}\u{437}\u{431}\u{43E}\u{440}\u{430} \u{43D}\u{430} \u{432}\u{440}\u{435}\u{43C}\u{435}\u{432}\u{438} \u{438}\u{43D}\u{442}\u{435}\u{440}\u{432}\u{430}\u{43B}`,
    "maximumDate": `\u{41F}\u{43E}\u{441}\u{43B}\u{435}\u{434}\u{43D}\u{430} \u{43D}\u{430}\u{43B}\u{438}\u{447}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}`,
    "minimumDate": `\u{41F}\u{44A}\u{440}\u{432}\u{430} \u{43D}\u{430}\u{43B}\u{438}\u{447}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}`,
    "next": `\u{41D}\u{430}\u{43F}\u{440}\u{435}\u{434}`,
    "previous": `\u{41D}\u{430}\u{437}\u{430}\u{434}`,
    "selectedDateDescription": (args)=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435}, \u{437}\u{430} \u{434}\u{430} \u{43F}\u{440}\u{438}\u{441}\u{442}\u{44A}\u{43F}\u{438}\u{442}\u{435} \u{43A}\u{44A}\u{43C} \u{438}\u{437}\u{431}\u{43E}\u{440}\u{430} \u{43D}\u{430} \u{432}\u{440}\u{435}\u{43C}\u{435}\u{432}\u{438} \u{438}\u{43D}\u{442}\u{435}\u{440}\u{432}\u{430}\u{43B}`,
    "todayDate": (args)=>`\u{414}\u{43D}\u{435}\u{441}, ${args.date}`,
    "todayDateSelected": (args)=>`\u{414}\u{43D}\u{435}\u{441}, ${args.date} \u{441}\u{430} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`
}; //# sourceMappingURL=bg-BG.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/cs-CZ.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} a\u{17E} ${args.endDate}`,
    "dateSelected": (args)=>`Vybr\xe1no ${args.date}`,
    "finishRangeSelectionPrompt": `Kliknut\xedm dokon\u{10D}\xedte v\xfdb\u{11B}r rozsahu dat`,
    "maximumDate": `Posledn\xed dostupn\xe9 datum`,
    "minimumDate": `Prvn\xed dostupn\xe9 datum`,
    "next": `Dal\u{161}\xed`,
    "previous": `P\u{159}edchoz\xed`,
    "selectedDateDescription": (args)=>`Vybran\xe9 datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Vybran\xe9 obdob\xed: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Kliknut\xedm zah\xe1j\xedte v\xfdb\u{11B}r rozsahu dat`,
    "todayDate": (args)=>`Dnes, ${args.date}`,
    "todayDateSelected": (args)=>`Dnes, vybr\xe1no ${args.date}`
}; //# sourceMappingURL=cs-CZ.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/da-DK.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} til ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} valgt`,
    "finishRangeSelectionPrompt": `Klik for at fuldf\xf8re valg af datoomr\xe5de`,
    "maximumDate": `Sidste ledige dato`,
    "minimumDate": `F\xf8rste ledige dato`,
    "next": `N\xe6ste`,
    "previous": `Forrige`,
    "selectedDateDescription": (args)=>`Valgt dato: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valgt interval: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Klik for at starte valg af datoomr\xe5de`,
    "todayDate": (args)=>`I dag, ${args.date}`,
    "todayDateSelected": (args)=>`I dag, ${args.date} valgt`
}; //# sourceMappingURL=da-DK.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/de-DE.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} bis ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} ausgew\xe4hlt`,
    "finishRangeSelectionPrompt": `Klicken, um die Auswahl des Datumsbereichs zu beenden`,
    "maximumDate": `Letztes verf\xfcgbares Datum`,
    "minimumDate": `Erstes verf\xfcgbares Datum`,
    "next": `Weiter`,
    "previous": `Zur\xfcck`,
    "selectedDateDescription": (args)=>`Ausgew\xe4hltes Datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Ausgew\xe4hlter Bereich: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Klicken, um die Auswahl des Datumsbereichs zu beginnen`,
    "todayDate": (args)=>`Heute, ${args.date}`,
    "todayDateSelected": (args)=>`Heute, ${args.date} ausgew\xe4hlt`
}; //# sourceMappingURL=de-DE.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/el-GR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} \u{3AD}\u{3C9}\u{3C2} ${args.endDate}`,
    "dateSelected": (args)=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5} ${args.date}`,
    "finishRangeSelectionPrompt": `\u{39A}\u{3AC}\u{3BD}\u{3C4}\u{3B5} \u{3BA}\u{3BB}\u{3B9}\u{3BA} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3BF}\u{3BB}\u{3BF}\u{3BA}\u{3BB}\u{3B7}\u{3C1}\u{3CE}\u{3C3}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3B7}\u{3BD} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C5}\u{3C2} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3B9}\u{3CE}\u{3BD}`,
    "maximumDate": `\u{3A4}\u{3B5}\u{3BB}\u{3B5}\u{3C5}\u{3C4}\u{3B1}\u{3AF}\u{3B1} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}`,
    "minimumDate": `\u{3A0}\u{3C1}\u{3CE}\u{3C4}\u{3B7} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}`,
    "next": `\u{395}\u{3C0}\u{3CC}\u{3BC}\u{3B5}\u{3BD}\u{3BF}`,
    "previous": `\u{3A0}\u{3C1}\u{3BF}\u{3B7}\u{3B3}\u{3BF}\u{3CD}\u{3BC}\u{3B5}\u{3BD}\u{3BF}`,
    "selectedDateDescription": (args)=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C2}: ${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{39A}\u{3AC}\u{3BD}\u{3C4}\u{3B5} \u{3BA}\u{3BB}\u{3B9}\u{3BA} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3BE}\u{3B5}\u{3BA}\u{3B9}\u{3BD}\u{3AE}\u{3C3}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3B7}\u{3BD} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C5}\u{3C2} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3B9}\u{3CE}\u{3BD}`,
    "todayDate": (args)=>`\u{3A3}\u{3AE}\u{3BC}\u{3B5}\u{3C1}\u{3B1}, ${args.date}`,
    "todayDateSelected": (args)=>`\u{3A3}\u{3AE}\u{3BC}\u{3B5}\u{3C1}\u{3B1}, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3C4}\u{3B7}\u{3BA}\u{3B5} ${args.date}`
}; //# sourceMappingURL=el-GR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/en-US.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "previous": `Previous`,
    "next": `Next`,
    "selectedDateDescription": (args)=>`Selected Date: ${args.date}`,
    "selectedRangeDescription": (args)=>`Selected Range: ${args.dateRange}`,
    "todayDate": (args)=>`Today, ${args.date}`,
    "todayDateSelected": (args)=>`Today, ${args.date} selected`,
    "dateSelected": (args)=>`${args.date} selected`,
    "startRangeSelectionPrompt": `Click to start selecting date range`,
    "finishRangeSelectionPrompt": `Click to finish selecting date range`,
    "minimumDate": `First available date`,
    "maximumDate": `Last available date`,
    "dateRange": (args)=>`${args.startDate} to ${args.endDate}`
}; //# sourceMappingURL=en-US.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/es-ES.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} a ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} seleccionado`,
    "finishRangeSelectionPrompt": `Haga clic para terminar de seleccionar rango de fechas`,
    "maximumDate": `\xdaltima fecha disponible`,
    "minimumDate": `Primera fecha disponible`,
    "next": `Siguiente`,
    "previous": `Anterior`,
    "selectedDateDescription": (args)=>`Fecha seleccionada: ${args.date}`,
    "selectedRangeDescription": (args)=>`Intervalo seleccionado: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Haga clic para comenzar a seleccionar un rango de fechas`,
    "todayDate": (args)=>`Hoy, ${args.date}`,
    "todayDateSelected": (args)=>`Hoy, ${args.date} seleccionado`
}; //# sourceMappingURL=es-ES.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/et-EE.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} kuni ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} valitud`,
    "finishRangeSelectionPrompt": `Kl\xf5psake kuup\xe4evavahemiku valimise l\xf5petamiseks`,
    "maximumDate": `Viimane saadaolev kuup\xe4ev`,
    "minimumDate": `Esimene saadaolev kuup\xe4ev`,
    "next": `J\xe4rgmine`,
    "previous": `Eelmine`,
    "selectedDateDescription": (args)=>`Valitud kuup\xe4ev: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valitud vahemik: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Kl\xf5psake kuup\xe4evavahemiku valimiseks`,
    "todayDate": (args)=>`T\xe4na, ${args.date}`,
    "todayDateSelected": (args)=>`T\xe4na, ${args.date} valitud`
}; //# sourceMappingURL=et-EE.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/fi-FI.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} \u{2013} ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} valittu`,
    "finishRangeSelectionPrompt": `Lopeta p\xe4iv\xe4m\xe4\xe4r\xe4alueen valinta napsauttamalla t\xe4t\xe4.`,
    "maximumDate": `Viimeinen varattavissa oleva p\xe4iv\xe4m\xe4\xe4r\xe4`,
    "minimumDate": `Ensimm\xe4inen varattavissa oleva p\xe4iv\xe4m\xe4\xe4r\xe4`,
    "next": `Seuraava`,
    "previous": `Edellinen`,
    "selectedDateDescription": (args)=>`Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valittu aikav\xe4li: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Aloita p\xe4iv\xe4m\xe4\xe4r\xe4alueen valinta napsauttamalla t\xe4t\xe4.`,
    "todayDate": (args)=>`T\xe4n\xe4\xe4n, ${args.date}`,
    "todayDateSelected": (args)=>`T\xe4n\xe4\xe4n, ${args.date} valittu`
}; //# sourceMappingURL=fi-FI.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/fr-FR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} \xe0 ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} s\xe9lectionn\xe9`,
    "finishRangeSelectionPrompt": `Cliquer pour finir de s\xe9lectionner la plage de dates`,
    "maximumDate": `Derni\xe8re date disponible`,
    "minimumDate": `Premi\xe8re date disponible`,
    "next": `Suivant`,
    "previous": `Pr\xe9c\xe9dent`,
    "selectedDateDescription": (args)=>`Date s\xe9lectionn\xe9e\xa0: ${args.date}`,
    "selectedRangeDescription": (args)=>`Plage s\xe9lectionn\xe9e\xa0: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Cliquer pour commencer \xe0 s\xe9lectionner la plage de dates`,
    "todayDate": (args)=>`Aujourd'hui, ${args.date}`,
    "todayDateSelected": (args)=>`Aujourd\u{2019}hui, ${args.date} s\xe9lectionn\xe9`
}; //# sourceMappingURL=fr-FR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/he-IL.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} \u{5E2}\u{5D3} ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
    "finishRangeSelectionPrompt": `\u{5D7}\u{5E5} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E1}\u{5D9}\u{5D9}\u{5DD} \u{5D0}\u{5EA} \u{5D1}\u{5D7}\u{5D9}\u{5E8}\u{5EA} \u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5D4}\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DB}\u{5D9}\u{5DD}`,
    "maximumDate": `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E4}\u{5E0}\u{5D5}\u{5D9} \u{5D0}\u{5D7}\u{5E8}\u{5D5}\u{5DF}`,
    "minimumDate": `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E4}\u{5E0}\u{5D5}\u{5D9} \u{5E8}\u{5D0}\u{5E9}\u{5D5}\u{5DF}`,
    "next": `\u{5D4}\u{5D1}\u{5D0}`,
    "previous": `\u{5D4}\u{5E7}\u{5D5}\u{5D3}\u{5DD}`,
    "selectedDateDescription": (args)=>`\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{5DC}\u{5D7}\u{5E5} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D4}\u{5EA}\u{5D7}\u{5D9}\u{5DC} \u{5D1}\u{5D1}\u{5D7}\u{5D9}\u{5E8}\u{5EA} \u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5D4}\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DB}\u{5D9}\u{5DD}`,
    "todayDate": (args)=>`\u{5D4}\u{5D9}\u{5D5}\u{5DD}, ${args.date}`,
    "todayDateSelected": (args)=>`\u{5D4}\u{5D9}\u{5D5}\u{5DD}, ${args.date} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`
}; //# sourceMappingURL=he-IL.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/hr-HR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} do ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} odabran`,
    "finishRangeSelectionPrompt": `Kliknite da dovr\u{161}ite raspon odabranih datuma`,
    "maximumDate": `Posljednji raspolo\u{17E}ivi datum`,
    "minimumDate": `Prvi raspolo\u{17E}ivi datum`,
    "next": `Sljede\u{107}i`,
    "previous": `Prethodni`,
    "selectedDateDescription": (args)=>`Odabrani datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Odabrani raspon: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Kliknite da zapo\u{10D}nete raspon odabranih datuma`,
    "todayDate": (args)=>`Danas, ${args.date}`,
    "todayDateSelected": (args)=>`Danas, odabran ${args.date}`
}; //# sourceMappingURL=hr-HR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/hu-HU.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate}\u{2013}${args.endDate}`,
    "dateSelected": (args)=>`${args.date} kiv\xe1lasztva`,
    "finishRangeSelectionPrompt": `Kattintson a d\xe1tumtartom\xe1ny kijel\xf6l\xe9s\xe9nek befejez\xe9s\xe9hez`,
    "maximumDate": `Utols\xf3 el\xe9rhet\u{151} d\xe1tum`,
    "minimumDate": `Az els\u{151} el\xe9rhet\u{151} d\xe1tum`,
    "next": `K\xf6vetkez\u{151}`,
    "previous": `El\u{151}z\u{151}`,
    "selectedDateDescription": (args)=>`Kijel\xf6lt d\xe1tum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Kijel\xf6lt tartom\xe1ny: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Kattintson a d\xe1tumtartom\xe1ny kijel\xf6l\xe9s\xe9nek ind\xedt\xe1s\xe1hoz`,
    "todayDate": (args)=>`Ma, ${args.date}`,
    "todayDateSelected": (args)=>`Ma, ${args.date} kijel\xf6lve`
}; //# sourceMappingURL=hu-HU.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/it-IT.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`Da ${args.startDate} a ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} selezionata`,
    "finishRangeSelectionPrompt": `Fai clic per completare la selezione dell\u{2019}intervallo di date`,
    "maximumDate": `Ultima data disponibile`,
    "minimumDate": `Prima data disponibile`,
    "next": `Successivo`,
    "previous": `Precedente`,
    "selectedDateDescription": (args)=>`Data selezionata: ${args.date}`,
    "selectedRangeDescription": (args)=>`Intervallo selezionato: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Fai clic per selezionare l\u{2019}intervallo di date`,
    "todayDate": (args)=>`Oggi, ${args.date}`,
    "todayDateSelected": (args)=>`Oggi, ${args.date} selezionata`
}; //# sourceMappingURL=it-IT.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/ja-JP.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} \u{304B}\u{3089} ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} \u{3092}\u{9078}\u{629E}`,
    "finishRangeSelectionPrompt": `\u{30AF}\u{30EA}\u{30C3}\u{30AF}\u{3057}\u{3066}\u{65E5}\u{4ED8}\u{7BC4}\u{56F2}\u{306E}\u{9078}\u{629E}\u{3092}\u{7D42}\u{4E86}`,
    "maximumDate": `\u{6700}\u{7D42}\u{5229}\u{7528}\u{53EF}\u{80FD}\u{65E5}`,
    "minimumDate": `\u{6700}\u{521D}\u{306E}\u{5229}\u{7528}\u{53EF}\u{80FD}\u{65E5}`,
    "next": `\u{6B21}\u{3078}`,
    "previous": `\u{524D}\u{3078}`,
    "selectedDateDescription": (args)=>`\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8} : ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{9078}\u{629E}\u{7BC4}\u{56F2} : ${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{30AF}\u{30EA}\u{30C3}\u{30AF}\u{3057}\u{3066}\u{65E5}\u{4ED8}\u{7BC4}\u{56F2}\u{306E}\u{9078}\u{629E}\u{3092}\u{958B}\u{59CB}`,
    "todayDate": (args)=>`\u{672C}\u{65E5}\u{3001}${args.date}`,
    "todayDateSelected": (args)=>`\u{672C}\u{65E5}\u{3001}${args.date} \u{3092}\u{9078}\u{629E}`
}; //# sourceMappingURL=ja-JP.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/ko-KR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} ~ ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} \u{C120}\u{D0DD}\u{B428}`,
    "finishRangeSelectionPrompt": `\u{B0A0}\u{C9DC} \u{BC94}\u{C704} \u{C120}\u{D0DD}\u{C744} \u{C644}\u{B8CC}\u{D558}\u{B824}\u{BA74} \u{D074}\u{B9AD}\u{D558}\u{C2ED}\u{C2DC}\u{C624}.`,
    "maximumDate": `\u{B9C8}\u{C9C0}\u{B9C9}\u{C73C}\u{B85C} \u{C0AC}\u{C6A9} \u{AC00}\u{B2A5}\u{D55C} \u{C77C}\u{C790}`,
    "minimumDate": `\u{CC98}\u{C74C}\u{C73C}\u{B85C} \u{C0AC}\u{C6A9} \u{AC00}\u{B2A5}\u{D55C} \u{C77C}\u{C790}`,
    "next": `\u{B2E4}\u{C74C}`,
    "previous": `\u{C774}\u{C804}`,
    "selectedDateDescription": (args)=>`\u{C120}\u{D0DD} \u{C77C}\u{C790}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{C120}\u{D0DD} \u{BC94}\u{C704}: ${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{B0A0}\u{C9DC} \u{BC94}\u{C704} \u{C120}\u{D0DD}\u{C744} \u{C2DC}\u{C791}\u{D558}\u{B824}\u{BA74} \u{D074}\u{B9AD}\u{D558}\u{C2ED}\u{C2DC}\u{C624}.`,
    "todayDate": (args)=>`\u{C624}\u{B298}, ${args.date}`,
    "todayDateSelected": (args)=>`\u{C624}\u{B298}, ${args.date} \u{C120}\u{D0DD}\u{B428}`
}; //# sourceMappingURL=ko-KR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/lt-LT.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`Nuo ${args.startDate} iki ${args.endDate}`,
    "dateSelected": (args)=>`Pasirinkta ${args.date}`,
    "finishRangeSelectionPrompt": `Spustel\u{117}kite, kad baigtum\u{117}te pasirinkti dat\u{173} interval\u{105}`,
    "maximumDate": `Paskutin\u{117} galima data`,
    "minimumDate": `Pirmoji galima data`,
    "next": `Paskesnis`,
    "previous": `Ankstesnis`,
    "selectedDateDescription": (args)=>`Pasirinkta data: ${args.date}`,
    "selectedRangeDescription": (args)=>`Pasirinktas intervalas: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Spustel\u{117}kite, kad prad\u{117}tum\u{117}te pasirinkti dat\u{173} interval\u{105}`,
    "todayDate": (args)=>`\u{160}iandien, ${args.date}`,
    "todayDateSelected": (args)=>`\u{160}iandien, pasirinkta ${args.date}`
}; //# sourceMappingURL=lt-LT.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/lv-LV.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`No ${args.startDate} l\u{12B}dz ${args.endDate}`,
    "dateSelected": (args)=>`Atlas\u{12B}ts: ${args.date}`,
    "finishRangeSelectionPrompt": `Noklik\u{161}\u{137}iniet, lai pabeigtu datumu diapazona atlasi`,
    "maximumDate": `P\u{113}d\u{113}jais pieejamais datums`,
    "minimumDate": `Pirmais pieejamais datums`,
    "next": `T\u{101}l\u{101}k`,
    "previous": `Atpaka\u{13C}`,
    "selectedDateDescription": (args)=>`Atlas\u{12B}tais datums: ${args.date}`,
    "selectedRangeDescription": (args)=>`Atlas\u{12B}tais diapazons: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Noklik\u{161}\u{137}iniet, lai s\u{101}ktu datumu diapazona atlasi`,
    "todayDate": (args)=>`\u{160}odien, ${args.date}`,
    "todayDateSelected": (args)=>`Atlas\u{12B}ta \u{161}odiena, ${args.date}`
}; //# sourceMappingURL=lv-LV.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/nb-NO.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} til ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} valgt`,
    "finishRangeSelectionPrompt": `Klikk for \xe5 fullf\xf8re valg av datoomr\xe5de`,
    "maximumDate": `Siste tilgjengelige dato`,
    "minimumDate": `F\xf8rste tilgjengelige dato`,
    "next": `Neste`,
    "previous": `Forrige`,
    "selectedDateDescription": (args)=>`Valgt dato: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valgt omr\xe5de: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Klikk for \xe5 starte valg av datoomr\xe5de`,
    "todayDate": (args)=>`I dag, ${args.date}`,
    "todayDateSelected": (args)=>`I dag, ${args.date} valgt`
}; //# sourceMappingURL=nb-NO.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/nl-NL.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} tot ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} geselecteerd`,
    "finishRangeSelectionPrompt": `Klik om de selectie van het datumbereik te voltooien`,
    "maximumDate": `Laatste beschikbare datum`,
    "minimumDate": `Eerste beschikbare datum`,
    "next": `Volgende`,
    "previous": `Vorige`,
    "selectedDateDescription": (args)=>`Geselecteerde datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Geselecteerd bereik: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Klik om het datumbereik te selecteren`,
    "todayDate": (args)=>`Vandaag, ${args.date}`,
    "todayDateSelected": (args)=>`Vandaag, ${args.date} geselecteerd`
}; //# sourceMappingURL=nl-NL.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/pl-PL.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} do ${args.endDate}`,
    "dateSelected": (args)=>`Wybrano ${args.date}`,
    "finishRangeSelectionPrompt": `Kliknij, aby zako\u{144}czy\u{107} wyb\xf3r zakresu dat`,
    "maximumDate": `Ostatnia dost\u{119}pna data`,
    "minimumDate": `Pierwsza dost\u{119}pna data`,
    "next": `Dalej`,
    "previous": `Wstecz`,
    "selectedDateDescription": (args)=>`Wybrana data: ${args.date}`,
    "selectedRangeDescription": (args)=>`Wybrany zakres: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Kliknij, aby rozpocz\u{105}\u{107} wyb\xf3r zakresu dat`,
    "todayDate": (args)=>`Dzisiaj, ${args.date}`,
    "todayDateSelected": (args)=>`Dzisiaj wybrano ${args.date}`
}; //# sourceMappingURL=pl-PL.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/pt-BR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} a ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} selecionado`,
    "finishRangeSelectionPrompt": `Clique para concluir a sele\xe7\xe3o do intervalo de datas`,
    "maximumDate": `\xdaltima data dispon\xedvel`,
    "minimumDate": `Primeira data dispon\xedvel`,
    "next": `Pr\xf3ximo`,
    "previous": `Anterior`,
    "selectedDateDescription": (args)=>`Data selecionada: ${args.date}`,
    "selectedRangeDescription": (args)=>`Intervalo selecionado: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Clique para iniciar a sele\xe7\xe3o do intervalo de datas`,
    "todayDate": (args)=>`Hoje, ${args.date}`,
    "todayDateSelected": (args)=>`Hoje, ${args.date} selecionado`
}; //# sourceMappingURL=pt-BR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/pt-PT.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} a ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} selecionado`,
    "finishRangeSelectionPrompt": `Clique para terminar de selecionar o intervalo de datas`,
    "maximumDate": `\xdaltima data dispon\xedvel`,
    "minimumDate": `Primeira data dispon\xedvel`,
    "next": `Pr\xf3ximo`,
    "previous": `Anterior`,
    "selectedDateDescription": (args)=>`Data selecionada: ${args.date}`,
    "selectedRangeDescription": (args)=>`Intervalo selecionado: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Clique para come\xe7ar a selecionar o intervalo de datas`,
    "todayDate": (args)=>`Hoje, ${args.date}`,
    "todayDateSelected": (args)=>`Hoje, ${args.date} selecionado`
}; //# sourceMappingURL=pt-PT.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/ro-RO.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`De la ${args.startDate} p\xe2n\u{103} la ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} selectat\u{103}`,
    "finishRangeSelectionPrompt": `Ap\u{103}sa\u{163}i pentru a finaliza selec\u{163}ia razei pentru dat\u{103}`,
    "maximumDate": `Ultima dat\u{103} disponibil\u{103}`,
    "minimumDate": `Prima dat\u{103} disponibil\u{103}`,
    "next": `Urm\u{103}torul`,
    "previous": `\xcenainte`,
    "selectedDateDescription": (args)=>`Dat\u{103} selectat\u{103}: ${args.date}`,
    "selectedRangeDescription": (args)=>`Interval selectat: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Ap\u{103}sa\u{163}i pentru a \xeencepe selec\u{163}ia razei pentru dat\u{103}`,
    "todayDate": (args)=>`Ast\u{103}zi, ${args.date}`,
    "todayDateSelected": (args)=>`Azi, ${args.date} selectat\u{103}`
}; //# sourceMappingURL=ro-RO.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/ru-RU.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`\u{421} ${args.startDate} \u{43F}\u{43E} ${args.endDate}`,
    "dateSelected": (args)=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${args.date}`,
    "finishRangeSelectionPrompt": `\u{429}\u{435}\u{43B}\u{43A}\u{43D}\u{438}\u{442}\u{435}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{438}\u{442}\u{44C} \u{432}\u{44B}\u{431}\u{43E}\u{440} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}\u{430} \u{434}\u{430}\u{442}`,
    "maximumDate": `\u{41F}\u{43E}\u{441}\u{43B}\u{435}\u{434}\u{43D}\u{44F}\u{44F} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}`,
    "minimumDate": `\u{41F}\u{435}\u{440}\u{432}\u{430}\u{44F} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}`,
    "next": `\u{414}\u{430}\u{43B}\u{435}\u{435}`,
    "previous": `\u{41D}\u{430}\u{437}\u{430}\u{434}`,
    "selectedDateDescription": (args)=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{429}\u{435}\u{43B}\u{43A}\u{43D}\u{438}\u{442}\u{435}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43D}\u{430}\u{447}\u{430}\u{442}\u{44C} \u{432}\u{44B}\u{431}\u{43E}\u{440} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}\u{430} \u{434}\u{430}\u{442}`,
    "todayDate": (args)=>`\u{421}\u{435}\u{433}\u{43E}\u{434}\u{43D}\u{44F}, ${args.date}`,
    "todayDateSelected": (args)=>`\u{421}\u{435}\u{433}\u{43E}\u{434}\u{43D}\u{44F}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${args.date}`
}; //# sourceMappingURL=ru-RU.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/sk-SK.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`Od ${args.startDate} do ${args.endDate}`,
    "dateSelected": (args)=>`Vybrat\xfd d\xe1tum ${args.date}`,
    "finishRangeSelectionPrompt": `Kliknut\xedm dokon\u{10D}\xedte v\xfdber rozsahu d\xe1tumov`,
    "maximumDate": `Posledn\xfd dostupn\xfd d\xe1tum`,
    "minimumDate": `Prv\xfd dostupn\xfd d\xe1tum`,
    "next": `Nasleduj\xface`,
    "previous": `Predch\xe1dzaj\xface`,
    "selectedDateDescription": (args)=>`Vybrat\xfd d\xe1tum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Vybrat\xfd rozsah: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Kliknut\xedm spust\xedte v\xfdber rozsahu d\xe1tumov`,
    "todayDate": (args)=>`Dnes ${args.date}`,
    "todayDateSelected": (args)=>`Vybrat\xfd dne\u{161}n\xfd d\xe1tum ${args.date}`
}; //# sourceMappingURL=sk-SK.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/sl-SI.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} do ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} izbrano`,
    "finishRangeSelectionPrompt": `Kliknite za dokon\u{10D}anje izbire datumskega obsega`,
    "maximumDate": `Zadnji razpolo\u{17E}ljivi datum`,
    "minimumDate": `Prvi razpolo\u{17E}ljivi datum`,
    "next": `Naprej`,
    "previous": `Nazaj`,
    "selectedDateDescription": (args)=>`Izbrani datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Izbrano obmo\u{10D}je: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Kliknite za za\u{10D}etek izbire datumskega obsega`,
    "todayDate": (args)=>`Danes, ${args.date}`,
    "todayDateSelected": (args)=>`Danes, ${args.date} izbrano`
}; //# sourceMappingURL=sl-SI.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/sr-SP.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} do ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} izabran`,
    "finishRangeSelectionPrompt": `Kliknite da dovr\u{161}ite opseg izabranih datuma`,
    "maximumDate": `Zadnji raspolo\u{17E}ivi datum`,
    "minimumDate": `Prvi raspolo\u{17E}ivi datum`,
    "next": `Slede\u{107}i`,
    "previous": `Prethodni`,
    "selectedDateDescription": (args)=>`Izabrani datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Izabrani period: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Kliknite da zapo\u{10D}nete opseg izabranih datuma`,
    "todayDate": (args)=>`Danas, ${args.date}`,
    "todayDateSelected": (args)=>`Danas, izabran ${args.date}`
}; //# sourceMappingURL=sr-SP.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/sv-SE.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} till ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} har valts`,
    "finishRangeSelectionPrompt": `Klicka f\xf6r att avsluta val av datumintervall`,
    "maximumDate": `Sista tillg\xe4ngliga datum`,
    "minimumDate": `F\xf6rsta tillg\xe4ngliga datum`,
    "next": `N\xe4sta`,
    "previous": `F\xf6reg\xe5ende`,
    "selectedDateDescription": (args)=>`Valt datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valt intervall: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Klicka f\xf6r att v\xe4lja datumintervall`,
    "todayDate": (args)=>`Idag, ${args.date}`,
    "todayDateSelected": (args)=>`Idag, ${args.date} har valts`
}; //# sourceMappingURL=sv-SE.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/tr-TR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} - ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} se\xe7ildi`,
    "finishRangeSelectionPrompt": `Tarih aral\u{131}\u{11F}\u{131} se\xe7imini tamamlamak i\xe7in t\u{131}klay\u{131}n`,
    "maximumDate": `Son m\xfcsait tarih`,
    "minimumDate": `\u{130}lk m\xfcsait tarih`,
    "next": `Sonraki`,
    "previous": `\xd6nceki`,
    "selectedDateDescription": (args)=>`Se\xe7ilen Tarih: ${args.date}`,
    "selectedRangeDescription": (args)=>`Se\xe7ilen Aral\u{131}k: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Tarih aral\u{131}\u{11F}\u{131} se\xe7imini ba\u{15F}latmak i\xe7in t\u{131}klay\u{131}n`,
    "todayDate": (args)=>`Bug\xfcn, ${args.date}`,
    "todayDateSelected": (args)=>`Bug\xfcn, ${args.date} se\xe7ildi`
}; //# sourceMappingURL=tr-TR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/uk-UA.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} \u{2014} ${args.endDate}`,
    "dateSelected": (args)=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${args.date}`,
    "finishRangeSelectionPrompt": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C}, \u{449}\u{43E}\u{431} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{438}\u{442}\u{438} \u{432}\u{438}\u{431}\u{456}\u{440} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}\u{443} \u{434}\u{430}\u{442}`,
    "maximumDate": `\u{41E}\u{441}\u{442}\u{430}\u{43D}\u{43D}\u{44F} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}`,
    "minimumDate": `\u{41F}\u{435}\u{440}\u{448}\u{430} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}`,
    "next": `\u{41D}\u{430}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{438}\u{439}`,
    "previous": `\u{41F}\u{43E}\u{43F}\u{435}\u{440}\u{435}\u{434}\u{43D}\u{456}\u{439}`,
    "selectedDateDescription": (args)=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C}, \u{449}\u{43E}\u{431} \u{43F}\u{43E}\u{447}\u{430}\u{442}\u{438} \u{432}\u{438}\u{431}\u{456}\u{440} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}\u{443} \u{434}\u{430}\u{442}`,
    "todayDate": (args)=>`\u{421}\u{44C}\u{43E}\u{433}\u{43E}\u{434}\u{43D}\u{456}, ${args.date}`,
    "todayDateSelected": (args)=>`\u{421}\u{44C}\u{43E}\u{433}\u{43E}\u{434}\u{43D}\u{456}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${args.date}`
}; //# sourceMappingURL=uk-UA.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/zh-CN.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} \u{81F3} ${args.endDate}`,
    "dateSelected": (args)=>`\u{5DF2}\u{9009}\u{62E9} ${args.date}`,
    "finishRangeSelectionPrompt": `\u{5355}\u{51FB}\u{4EE5}\u{5B8C}\u{6210}\u{9009}\u{62E9}\u{65E5}\u{671F}\u{8303}\u{56F4}`,
    "maximumDate": `\u{6700}\u{540E}\u{4E00}\u{4E2A}\u{53EF}\u{7528}\u{65E5}\u{671F}`,
    "minimumDate": `\u{7B2C}\u{4E00}\u{4E2A}\u{53EF}\u{7528}\u{65E5}\u{671F}`,
    "next": `\u{4E0B}\u{4E00}\u{9875}`,
    "previous": `\u{4E0A}\u{4E00}\u{9875}`,
    "selectedDateDescription": (args)=>`\u{9009}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${args.date}`,
    "selectedRangeDescription": (args)=>`\u{9009}\u{5B9A}\u{7684}\u{8303}\u{56F4}\u{FF1A}${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{5355}\u{51FB}\u{4EE5}\u{5F00}\u{59CB}\u{9009}\u{62E9}\u{65E5}\u{671F}\u{8303}\u{56F4}`,
    "todayDate": (args)=>`\u{4ECA}\u{5929}\u{FF0C}\u{5373} ${args.date}`,
    "todayDateSelected": (args)=>`\u{5DF2}\u{9009}\u{62E9}\u{4ECA}\u{5929}\u{FF0C}\u{5373} ${args.date}`
}; //# sourceMappingURL=zh-CN.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/zh-TW.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "dateRange": (args)=>`${args.startDate} \u{81F3} ${args.endDate}`,
    "dateSelected": (args)=>`\u{5DF2}\u{9078}\u{53D6} ${args.date}`,
    "finishRangeSelectionPrompt": `\u{6309}\u{4E00}\u{4E0B}\u{4EE5}\u{5B8C}\u{6210}\u{9078}\u{53D6}\u{65E5}\u{671F}\u{7BC4}\u{570D}`,
    "maximumDate": `\u{6700}\u{5F8C}\u{4E00}\u{500B}\u{53EF}\u{7528}\u{65E5}\u{671F}`,
    "minimumDate": `\u{7B2C}\u{4E00}\u{500B}\u{53EF}\u{7528}\u{65E5}\u{671F}`,
    "next": `\u{4E0B}\u{4E00}\u{9801}`,
    "previous": `\u{4E0A}\u{4E00}\u{9801}`,
    "selectedDateDescription": (args)=>`\u{9078}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${args.date}`,
    "selectedRangeDescription": (args)=>`\u{9078}\u{5B9A}\u{7684}\u{7BC4}\u{570D}\u{FF1A}${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{6309}\u{4E00}\u{4E0B}\u{4EE5}\u{958B}\u{59CB}\u{9078}\u{53D6}\u{65E5}\u{671F}\u{7BC4}\u{570D}`,
    "todayDate": (args)=>`\u{4ECA}\u{5929}\u{FF0C}${args.date}`,
    "todayDateSelected": (args)=>`\u{5DF2}\u{9078}\u{53D6}\u{4ECA}\u{5929}\u{FF0C}${args.date}`
}; //# sourceMappingURL=zh-TW.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/intlStrings.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $1fedb39dedbf7c51$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/ar-AE.main.js [app-ssr] (ecmascript)");
var $524ada6153e36bf5$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/bg-BG.main.js [app-ssr] (ecmascript)");
var $181053d31fc585a6$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/cs-CZ.main.js [app-ssr] (ecmascript)");
var $87f1f2ee75c25d27$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/da-DK.main.js [app-ssr] (ecmascript)");
var $3018d278e45fefcf$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/de-DE.main.js [app-ssr] (ecmascript)");
var $880b624ba6c377b6$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/el-GR.main.js [app-ssr] (ecmascript)");
var $6a7e3934431e9523$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/en-US.main.js [app-ssr] (ecmascript)");
var $4c458303ff44205c$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/es-ES.main.js [app-ssr] (ecmascript)");
var $4b6ec4ab19a96fff$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/et-EE.main.js [app-ssr] (ecmascript)");
var $a5184a366ed55e98$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/fi-FI.main.js [app-ssr] (ecmascript)");
var $094c11f0389b0f6c$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/fr-FR.main.js [app-ssr] (ecmascript)");
var $5b28c6b8eb99673e$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/he-IL.main.js [app-ssr] (ecmascript)");
var $519824243c1aad60$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/hr-HR.main.js [app-ssr] (ecmascript)");
var $2fde332abe847288$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/hu-HU.main.js [app-ssr] (ecmascript)");
var $b266f7fa452e8e83$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/it-IT.main.js [app-ssr] (ecmascript)");
var $3528fd03237947e3$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/ja-JP.main.js [app-ssr] (ecmascript)");
var $398f3b7902d2708f$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/ko-KR.main.js [app-ssr] (ecmascript)");
var $ebaae1c76687311e$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/lt-LT.main.js [app-ssr] (ecmascript)");
var $3ecb31d6694563f6$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/lv-LV.main.js [app-ssr] (ecmascript)");
var $26dc2e2c103f178c$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/nb-NO.main.js [app-ssr] (ecmascript)");
var $6bfd45b83a7d37dd$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/nl-NL.main.js [app-ssr] (ecmascript)");
var $6f70d036cac4bd46$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/pl-PL.main.js [app-ssr] (ecmascript)");
var $a227ce57c671783d$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/pt-BR.main.js [app-ssr] (ecmascript)");
var $97acad4758696d87$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/pt-PT.main.js [app-ssr] (ecmascript)");
var $010069c7d7fbbea3$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/ro-RO.main.js [app-ssr] (ecmascript)");
var $0ba9c30c48c8d602$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/ru-RU.main.js [app-ssr] (ecmascript)");
var $6873e95bd7af7559$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/sk-SK.main.js [app-ssr] (ecmascript)");
var $ce3c7852583668e3$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/sl-SI.main.js [app-ssr] (ecmascript)");
var $36cbdcce92af5213$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/sr-SP.main.js [app-ssr] (ecmascript)");
var $ce53fa032c8abdc9$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/sv-SE.main.js [app-ssr] (ecmascript)");
var $358703e281d51beb$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/tr-TR.main.js [app-ssr] (ecmascript)");
var $16bef71241a84fd2$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/uk-UA.main.js [app-ssr] (ecmascript)");
var $c80940728ad8dc0d$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/zh-CN.main.js [app-ssr] (ecmascript)");
var $ec192a5a83cfafeb$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/zh-TW.main.js [app-ssr] (ecmascript)");
module.exports = {
    "ar-AE": $1fedb39dedbf7c51$exports,
    "bg-BG": $524ada6153e36bf5$exports,
    "cs-CZ": $181053d31fc585a6$exports,
    "da-DK": $87f1f2ee75c25d27$exports,
    "de-DE": $3018d278e45fefcf$exports,
    "el-GR": $880b624ba6c377b6$exports,
    "en-US": $6a7e3934431e9523$exports,
    "es-ES": $4c458303ff44205c$exports,
    "et-EE": $4b6ec4ab19a96fff$exports,
    "fi-FI": $a5184a366ed55e98$exports,
    "fr-FR": $094c11f0389b0f6c$exports,
    "he-IL": $5b28c6b8eb99673e$exports,
    "hr-HR": $519824243c1aad60$exports,
    "hu-HU": $2fde332abe847288$exports,
    "it-IT": $b266f7fa452e8e83$exports,
    "ja-JP": $3528fd03237947e3$exports,
    "ko-KR": $398f3b7902d2708f$exports,
    "lt-LT": $ebaae1c76687311e$exports,
    "lv-LV": $3ecb31d6694563f6$exports,
    "nb-NO": $26dc2e2c103f178c$exports,
    "nl-NL": $6bfd45b83a7d37dd$exports,
    "pl-PL": $6f70d036cac4bd46$exports,
    "pt-BR": $a227ce57c671783d$exports,
    "pt-PT": $97acad4758696d87$exports,
    "ro-RO": $010069c7d7fbbea3$exports,
    "ru-RU": $0ba9c30c48c8d602$exports,
    "sk-SK": $6873e95bd7af7559$exports,
    "sl-SI": $ce3c7852583668e3$exports,
    "sr-SP": $36cbdcce92af5213$exports,
    "sv-SE": $ce53fa032c8abdc9$exports,
    "tr-TR": $358703e281d51beb$exports,
    "uk-UA": $16bef71241a84fd2$exports,
    "zh-CN": $c80940728ad8dc0d$exports,
    "zh-TW": $ec192a5a83cfafeb$exports
}; //# sourceMappingURL=intlStrings.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/utils.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $bd6dc95a3c5ee5cd$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/intlStrings.main.js [app-ssr] (ecmascript)");
var $idq92$internationalizeddate = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/date/dist/main.js [app-ssr] (ecmascript)");
var $idq92$reactariai18n = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/main.js [app-ssr] (ecmascript)");
var $idq92$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "hookData", ()=>$df1d8e967e73ec8e$export$653eddfc964b0f8a);
$parcel$export(module.exports, "getEraFormat", ()=>$df1d8e967e73ec8e$export$134cbb7fb09a9522);
$parcel$export(module.exports, "useSelectedDateDescription", ()=>$df1d8e967e73ec8e$export$b6df97c887c38e1a);
$parcel$export(module.exports, "useVisibleRangeDescription", ()=>$df1d8e967e73ec8e$export$31afe65d91ef6e8);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $df1d8e967e73ec8e$export$653eddfc964b0f8a = new WeakMap();
function $df1d8e967e73ec8e$export$134cbb7fb09a9522(date) {
    return (date === null || date === void 0 ? void 0 : date.calendar.identifier) === 'gregory' && date.era === 'BC' ? 'short' : undefined;
}
function $df1d8e967e73ec8e$export$b6df97c887c38e1a(state) {
    let stringFormatter = (0, $idq92$reactariai18n.useLocalizedStringFormatter)((0, $parcel$interopDefault($bd6dc95a3c5ee5cd$exports)), '@react-aria/calendar');
    let start, end;
    var _state_value;
    if ('highlightedRange' in state) ({ start: start, end: end } = state.highlightedRange || {});
    else start = end = (_state_value = state.value) !== null && _state_value !== void 0 ? _state_value : undefined;
    let dateFormatter = (0, $idq92$reactariai18n.useDateFormatter)({
        weekday: 'long',
        month: 'long',
        year: 'numeric',
        day: 'numeric',
        era: $df1d8e967e73ec8e$export$134cbb7fb09a9522(start) || $df1d8e967e73ec8e$export$134cbb7fb09a9522(end),
        timeZone: state.timeZone
    });
    let anchorDate = 'anchorDate' in state ? state.anchorDate : null;
    return (0, $idq92$react.useMemo)(()=>{
        // No message if currently selecting a range, or there is nothing highlighted.
        if (!anchorDate && start && end) {
            // Use a single date message if the start and end dates are the same day,
            // otherwise include both dates.
            if ((0, $idq92$internationalizeddate.isSameDay)(start, end)) {
                let date = dateFormatter.format(start.toDate(state.timeZone));
                return stringFormatter.format('selectedDateDescription', {
                    date: date
                });
            } else {
                let dateRange = $df1d8e967e73ec8e$var$formatRange(dateFormatter, stringFormatter, start, end, state.timeZone);
                return stringFormatter.format('selectedRangeDescription', {
                    dateRange: dateRange
                });
            }
        }
        return '';
    }, [
        start,
        end,
        anchorDate,
        state.timeZone,
        stringFormatter,
        dateFormatter
    ]);
}
function $df1d8e967e73ec8e$export$31afe65d91ef6e8(startDate, endDate, timeZone, isAria) {
    let stringFormatter = (0, $idq92$reactariai18n.useLocalizedStringFormatter)((0, $parcel$interopDefault($bd6dc95a3c5ee5cd$exports)), '@react-aria/calendar');
    let era = $df1d8e967e73ec8e$export$134cbb7fb09a9522(startDate) || $df1d8e967e73ec8e$export$134cbb7fb09a9522(endDate);
    let monthFormatter = (0, $idq92$reactariai18n.useDateFormatter)({
        month: 'long',
        year: 'numeric',
        era: era,
        calendar: startDate.calendar.identifier,
        timeZone: timeZone
    });
    let dateFormatter = (0, $idq92$reactariai18n.useDateFormatter)({
        month: 'long',
        year: 'numeric',
        day: 'numeric',
        era: era,
        calendar: startDate.calendar.identifier,
        timeZone: timeZone
    });
    return (0, $idq92$react.useMemo)(()=>{
        // Special case for month granularity. Format as a single month if only a
        // single month is visible, otherwise format as a range of months.
        if ((0, $idq92$internationalizeddate.isSameDay)(startDate, (0, $idq92$internationalizeddate.startOfMonth)(startDate))) {
            if ((0, $idq92$internationalizeddate.isSameDay)(endDate, (0, $idq92$internationalizeddate.endOfMonth)(startDate))) return monthFormatter.format(startDate.toDate(timeZone));
            else if ((0, $idq92$internationalizeddate.isSameDay)(endDate, (0, $idq92$internationalizeddate.endOfMonth)(endDate))) return isAria ? $df1d8e967e73ec8e$var$formatRange(monthFormatter, stringFormatter, startDate, endDate, timeZone) : monthFormatter.formatRange(startDate.toDate(timeZone), endDate.toDate(timeZone));
        }
        return isAria ? $df1d8e967e73ec8e$var$formatRange(dateFormatter, stringFormatter, startDate, endDate, timeZone) : dateFormatter.formatRange(startDate.toDate(timeZone), endDate.toDate(timeZone));
    }, [
        startDate,
        endDate,
        monthFormatter,
        dateFormatter,
        stringFormatter,
        timeZone,
        isAria
    ]);
}
function $df1d8e967e73ec8e$var$formatRange(dateFormatter, stringFormatter, start, end, timeZone) {
    let parts = dateFormatter.formatRangeToParts(start.toDate(timeZone), end.toDate(timeZone));
    // Find the separator between the start and end date. This is determined
    // by finding the last shared literal before the end range.
    let separatorIndex = -1;
    for(let i = 0; i < parts.length; i++){
        let part = parts[i];
        if (part.source === 'shared' && part.type === 'literal') separatorIndex = i;
        else if (part.source === 'endRange') break;
    }
    // Now we can combine the parts into start and end strings.
    let startValue = '';
    let endValue = '';
    for(let i = 0; i < parts.length; i++){
        if (i < separatorIndex) startValue += parts[i].value;
        else if (i > separatorIndex) endValue += parts[i].value;
    }
    return stringFormatter.format('dateRange', {
        startDate: startValue,
        endDate: endValue
    });
} //# sourceMappingURL=utils.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/useCalendarBase.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $df1d8e967e73ec8e$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/utils.main.js [app-ssr] (ecmascript)");
var $bd6dc95a3c5ee5cd$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/intlStrings.main.js [app-ssr] (ecmascript)");
var $dPWPO$reactarialiveannouncer = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/live-announcer/dist/main.js [app-ssr] (ecmascript)");
var $dPWPO$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $dPWPO$reactariai18n = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/main.js [app-ssr] (ecmascript)");
var $dPWPO$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useCalendarBase", ()=>$02ef492a56b91cb2$export$d652b3ea2d672d5b);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $02ef492a56b91cb2$export$d652b3ea2d672d5b(props, state) {
    let stringFormatter = (0, $dPWPO$reactariai18n.useLocalizedStringFormatter)((0, $parcel$interopDefault($bd6dc95a3c5ee5cd$exports)), '@react-aria/calendar');
    let domProps = (0, $dPWPO$reactariautils.filterDOMProps)(props);
    let title = (0, $df1d8e967e73ec8e$exports.useVisibleRangeDescription)(state.visibleRange.start, state.visibleRange.end, state.timeZone, false);
    let visibleRangeDescription = (0, $df1d8e967e73ec8e$exports.useVisibleRangeDescription)(state.visibleRange.start, state.visibleRange.end, state.timeZone, true);
    // Announce when the visible date range changes
    (0, $dPWPO$reactariautils.useUpdateEffect)(()=>{
        // only when pressing the Previous or Next button
        if (!state.isFocused) (0, $dPWPO$reactarialiveannouncer.announce)(visibleRangeDescription);
    }, [
        visibleRangeDescription
    ]);
    // Announce when the selected value changes
    let selectedDateDescription = (0, $df1d8e967e73ec8e$exports.useSelectedDateDescription)(state);
    (0, $dPWPO$reactariautils.useUpdateEffect)(()=>{
        if (selectedDateDescription) (0, $dPWPO$reactarialiveannouncer.announce)(selectedDateDescription, 'polite', 4000);
    // handle an update to the caption that describes the currently selected range, to announce the new value
    }, [
        selectedDateDescription
    ]);
    let errorMessageId = (0, $dPWPO$reactariautils.useSlotId)([
        Boolean(props.errorMessage),
        props.isInvalid,
        props.validationState
    ]);
    // Pass the label to the child grid elements.
    (0, $df1d8e967e73ec8e$exports.hookData).set(state, {
        ariaLabel: props['aria-label'],
        ariaLabelledBy: props['aria-labelledby'],
        errorMessageId: errorMessageId,
        selectedDateDescription: selectedDateDescription
    });
    // If the next or previous buttons become disabled while they are focused, move focus to the calendar body.
    let [nextFocused, setNextFocused] = (0, $dPWPO$react.useState)(false);
    let nextDisabled = props.isDisabled || state.isNextVisibleRangeInvalid();
    if (nextDisabled && nextFocused) {
        setNextFocused(false);
        state.setFocused(true);
    }
    let [previousFocused, setPreviousFocused] = (0, $dPWPO$react.useState)(false);
    let previousDisabled = props.isDisabled || state.isPreviousVisibleRangeInvalid();
    if (previousDisabled && previousFocused) {
        setPreviousFocused(false);
        state.setFocused(true);
    }
    let labelProps = (0, $dPWPO$reactariautils.useLabels)({
        id: props['id'],
        'aria-label': [
            props['aria-label'],
            visibleRangeDescription
        ].filter(Boolean).join(', '),
        'aria-labelledby': props['aria-labelledby']
    });
    return {
        calendarProps: (0, $dPWPO$reactariautils.mergeProps)(domProps, labelProps, {
            role: 'application',
            'aria-describedby': props['aria-describedby'] || undefined
        }),
        nextButtonProps: {
            onPress: ()=>state.focusNextPage(),
            'aria-label': stringFormatter.format('next'),
            isDisabled: nextDisabled,
            onFocusChange: setNextFocused
        },
        prevButtonProps: {
            onPress: ()=>state.focusPreviousPage(),
            'aria-label': stringFormatter.format('previous'),
            isDisabled: previousDisabled,
            onFocusChange: setPreviousFocused
        },
        errorMessageProps: {
            id: errorMessageId
        },
        title: title
    };
} //# sourceMappingURL=useCalendarBase.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/useCalendar.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $02ef492a56b91cb2$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/useCalendarBase.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useCalendar", ()=>$20e845123e697a89$export$3ee915f8151bd4f1);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $20e845123e697a89$export$3ee915f8151bd4f1(props, state) {
    return (0, $02ef492a56b91cb2$exports.useCalendarBase)(props, state);
} //# sourceMappingURL=useCalendar.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/useRangeCalendar.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $02ef492a56b91cb2$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/useCalendarBase.main.js [app-ssr] (ecmascript)");
var $3kfPe$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $3kfPe$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useRangeCalendar", ()=>$c49ada48cbc48220$export$87e0539f600c24e5);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $c49ada48cbc48220$export$87e0539f600c24e5(props, state, ref) {
    let res = (0, $02ef492a56b91cb2$exports.useCalendarBase)(props, state);
    // We need to ignore virtual pointer events from VoiceOver due to these bugs.
    // https://bugs.webkit.org/show_bug.cgi?id=222627
    // https://bugs.webkit.org/show_bug.cgi?id=223202
    // usePress also does this and waits for the following click event before firing.
    // We need to match that here otherwise this will fire before the press event in
    // useCalendarCell, causing range selection to not work properly.
    let isVirtualClick = (0, $3kfPe$react.useRef)(false);
    let windowRef = (0, $3kfPe$react.useRef)(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null);
    (0, $3kfPe$reactariautils.useEvent)(windowRef, 'pointerdown', (e)=>{
        isVirtualClick.current = e.width === 0 && e.height === 0;
    });
    // Stop range selection when pressing or releasing a pointer outside the calendar body,
    // except when pressing the next or previous buttons to switch months.
    let endDragging = (e)=>{
        if (isVirtualClick.current) {
            isVirtualClick.current = false;
            return;
        }
        state.setDragging(false);
        if (!state.anchorDate) return;
        let target = e.target;
        if (ref.current && ref.current.contains(document.activeElement) && (!ref.current.contains(target) || !target.closest('button, [role="button"]'))) state.selectFocusedDate();
    };
    (0, $3kfPe$reactariautils.useEvent)(windowRef, 'pointerup', endDragging);
    // Also stop range selection on blur, e.g. tabbing away from the calendar.
    res.calendarProps.onBlur = (e)=>{
        if (!ref.current) return;
        if ((!e.relatedTarget || !ref.current.contains(e.relatedTarget)) && state.anchorDate) state.selectFocusedDate();
    };
    // Prevent touch scrolling while dragging
    (0, $3kfPe$reactariautils.useEvent)(ref, 'touchmove', (e)=>{
        if (state.isDragging) e.preventDefault();
    }, {
        passive: false,
        capture: true
    });
    return res;
} //# sourceMappingURL=useRangeCalendar.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/useCalendarGrid.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $df1d8e967e73ec8e$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/utils.main.js [app-ssr] (ecmascript)");
var $iASLq$internationalizeddate = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/date/dist/main.js [app-ssr] (ecmascript)");
var $iASLq$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $iASLq$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $iASLq$reactariai18n = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useCalendarGrid", ()=>$a07388a797d86b95$export$cb95147730a423f5);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $a07388a797d86b95$export$cb95147730a423f5(props, state) {
    let { startDate: startDate = state.visibleRange.start, endDate: endDate = state.visibleRange.end } = props;
    let { direction: direction } = (0, $iASLq$reactariai18n.useLocale)();
    let onKeyDown = (e)=>{
        switch(e.key){
            case 'Enter':
            case ' ':
                e.preventDefault();
                state.selectFocusedDate();
                break;
            case 'PageUp':
                e.preventDefault();
                e.stopPropagation();
                state.focusPreviousSection(e.shiftKey);
                break;
            case 'PageDown':
                e.preventDefault();
                e.stopPropagation();
                state.focusNextSection(e.shiftKey);
                break;
            case 'End':
                e.preventDefault();
                e.stopPropagation();
                state.focusSectionEnd();
                break;
            case 'Home':
                e.preventDefault();
                e.stopPropagation();
                state.focusSectionStart();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                e.stopPropagation();
                if (direction === 'rtl') state.focusNextDay();
                else state.focusPreviousDay();
                break;
            case 'ArrowUp':
                e.preventDefault();
                e.stopPropagation();
                state.focusPreviousRow();
                break;
            case 'ArrowRight':
                e.preventDefault();
                e.stopPropagation();
                if (direction === 'rtl') state.focusPreviousDay();
                else state.focusNextDay();
                break;
            case 'ArrowDown':
                e.preventDefault();
                e.stopPropagation();
                state.focusNextRow();
                break;
            case 'Escape':
                // Cancel the selection.
                if ('setAnchorDate' in state) {
                    e.preventDefault();
                    state.setAnchorDate(null);
                }
                break;
        }
    };
    let visibleRangeDescription = (0, $df1d8e967e73ec8e$exports.useVisibleRangeDescription)(startDate, endDate, state.timeZone, true);
    let { ariaLabel: ariaLabel, ariaLabelledBy: ariaLabelledBy } = (0, $df1d8e967e73ec8e$exports.hookData).get(state);
    let labelProps = (0, $iASLq$reactariautils.useLabels)({
        'aria-label': [
            ariaLabel,
            visibleRangeDescription
        ].filter(Boolean).join(', '),
        'aria-labelledby': ariaLabelledBy
    });
    let dayFormatter = (0, $iASLq$reactariai18n.useDateFormatter)({
        weekday: props.weekdayStyle || 'narrow',
        timeZone: state.timeZone
    });
    let { locale: locale } = (0, $iASLq$reactariai18n.useLocale)();
    let weekDays = (0, $iASLq$react.useMemo)(()=>{
        let weekStart = (0, $iASLq$internationalizeddate.startOfWeek)((0, $iASLq$internationalizeddate.today)(state.timeZone), locale);
        return [
            ...new Array(7).keys()
        ].map((index)=>{
            let date = weekStart.add({
                days: index
            });
            let dateDay = date.toDate(state.timeZone);
            return dayFormatter.format(dateDay);
        });
    }, [
        locale,
        state.timeZone,
        dayFormatter
    ]);
    return {
        gridProps: (0, $iASLq$reactariautils.mergeProps)(labelProps, {
            role: 'grid',
            'aria-readonly': state.isReadOnly || undefined,
            'aria-disabled': state.isDisabled || undefined,
            'aria-multiselectable': 'highlightedRange' in state || undefined,
            onKeyDown: onKeyDown,
            onFocus: ()=>state.setFocused(true),
            onBlur: ()=>state.setFocused(false)
        }),
        headerProps: {
            // Column headers are hidden to screen readers to make navigating with a touch screen reader easier.
            // The day names are already included in the label of each cell, so there's no need to announce them twice.
            'aria-hidden': true
        },
        weekDays: weekDays
    };
} //# sourceMappingURL=useCalendarGrid.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/useCalendarCell.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $df1d8e967e73ec8e$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/utils.main.js [app-ssr] (ecmascript)");
var $bd6dc95a3c5ee5cd$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/intlStrings.main.js [app-ssr] (ecmascript)");
var $cuS6T$internationalizeddate = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/date/dist/main.js [app-ssr] (ecmascript)");
var $cuS6T$reactariautils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)");
var $cuS6T$reactariainteractions = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/node_modules/@react-aria/interactions/dist/main.js [app-ssr] (ecmascript)");
var $cuS6T$reactariai18n = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/dist/main.js [app-ssr] (ecmascript)");
var $cuS6T$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useCalendarCell", ()=>$4d833327a32c9193$export$136073280381448e);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $4d833327a32c9193$export$136073280381448e(props, state, ref) {
    let { date: date, isDisabled: isDisabled } = props;
    let { errorMessageId: errorMessageId, selectedDateDescription: selectedDateDescription } = (0, $df1d8e967e73ec8e$exports.hookData).get(state);
    let stringFormatter = (0, $cuS6T$reactariai18n.useLocalizedStringFormatter)((0, $parcel$interopDefault($bd6dc95a3c5ee5cd$exports)), '@react-aria/calendar');
    let dateFormatter = (0, $cuS6T$reactariai18n.useDateFormatter)({
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        era: (0, $df1d8e967e73ec8e$exports.getEraFormat)(date),
        timeZone: state.timeZone
    });
    let isSelected = state.isSelected(date);
    let isFocused = state.isCellFocused(date);
    isDisabled = isDisabled || state.isCellDisabled(date);
    let isUnavailable = state.isCellUnavailable(date);
    let isSelectable = !isDisabled && !isUnavailable;
    let isInvalid = state.isValueInvalid && Boolean('highlightedRange' in state ? !state.anchorDate && state.highlightedRange && date.compare(state.highlightedRange.start) >= 0 && date.compare(state.highlightedRange.end) <= 0 : state.value && (0, $cuS6T$internationalizeddate.isSameDay)(state.value, date));
    if (isInvalid) isSelected = true;
    // For performance, reuse the same date object as before if the new date prop is the same.
    // This allows subsequent useMemo results to be reused.
    date = (0, $cuS6T$reactariautils.useDeepMemo)(date, (0, $cuS6T$internationalizeddate.isEqualDay));
    let nativeDate = (0, $cuS6T$react.useMemo)(()=>date.toDate(state.timeZone), [
        date,
        state.timeZone
    ]);
    // aria-label should be localize Day of week, Month, Day and Year without Time.
    let isDateToday = (0, $cuS6T$internationalizeddate.isToday)(date, state.timeZone);
    let label = (0, $cuS6T$react.useMemo)(()=>{
        let label = '';
        // If this is a range calendar, add a description of the full selected range
        // to the first and last selected date.
        if ('highlightedRange' in state && state.value && !state.anchorDate && ((0, $cuS6T$internationalizeddate.isSameDay)(date, state.value.start) || (0, $cuS6T$internationalizeddate.isSameDay)(date, state.value.end))) label = selectedDateDescription + ', ';
        label += dateFormatter.format(nativeDate);
        if (isDateToday) label = stringFormatter.format(isSelected ? 'todayDateSelected' : 'todayDate', {
            date: label
        });
        else if (isSelected) label = stringFormatter.format('dateSelected', {
            date: label
        });
        if (state.minValue && (0, $cuS6T$internationalizeddate.isSameDay)(date, state.minValue)) label += ', ' + stringFormatter.format('minimumDate');
        else if (state.maxValue && (0, $cuS6T$internationalizeddate.isSameDay)(date, state.maxValue)) label += ', ' + stringFormatter.format('maximumDate');
        return label;
    }, [
        dateFormatter,
        nativeDate,
        stringFormatter,
        isSelected,
        isDateToday,
        date,
        state,
        selectedDateDescription
    ]);
    // When a cell is focused and this is a range calendar, add a prompt to help
    // screenreader users know that they are in a range selection mode.
    let rangeSelectionPrompt = '';
    if ('anchorDate' in state && isFocused && !state.isReadOnly && isSelectable) {
        // If selection has started add "click to finish selecting range"
        if (state.anchorDate) rangeSelectionPrompt = stringFormatter.format('finishRangeSelectionPrompt');
        else rangeSelectionPrompt = stringFormatter.format('startRangeSelectionPrompt');
    }
    let descriptionProps = (0, $cuS6T$reactariautils.useDescription)(rangeSelectionPrompt);
    let isAnchorPressed = (0, $cuS6T$react.useRef)(false);
    let isRangeBoundaryPressed = (0, $cuS6T$react.useRef)(false);
    let touchDragTimerRef = (0, $cuS6T$react.useRef)(undefined);
    let { pressProps: pressProps, isPressed: isPressed } = (0, $cuS6T$reactariainteractions.usePress)({
        // When dragging to select a range, we don't want dragging over the original anchor
        // again to trigger onPressStart. Cancel presses immediately when the pointer exits.
        shouldCancelOnPointerExit: 'anchorDate' in state && !!state.anchorDate,
        preventFocusOnPress: true,
        isDisabled: !isSelectable || state.isReadOnly,
        onPressStart (e) {
            if (state.isReadOnly) {
                state.setFocusedDate(date);
                return;
            }
            if ('highlightedRange' in state && !state.anchorDate && (e.pointerType === 'mouse' || e.pointerType === 'touch')) {
                // Allow dragging the start or end date of a range to modify it
                // rather than starting a new selection.
                // Don't allow dragging when invalid, or weird jumping behavior may occur as date ranges
                // are constrained to available dates. The user will need to select a new range in this case.
                if (state.highlightedRange && !isInvalid) {
                    if ((0, $cuS6T$internationalizeddate.isSameDay)(date, state.highlightedRange.start)) {
                        state.setAnchorDate(state.highlightedRange.end);
                        state.setFocusedDate(date);
                        state.setDragging(true);
                        isRangeBoundaryPressed.current = true;
                        return;
                    } else if ((0, $cuS6T$internationalizeddate.isSameDay)(date, state.highlightedRange.end)) {
                        state.setAnchorDate(state.highlightedRange.start);
                        state.setFocusedDate(date);
                        state.setDragging(true);
                        isRangeBoundaryPressed.current = true;
                        return;
                    }
                }
                let startDragging = ()=>{
                    state.setDragging(true);
                    touchDragTimerRef.current = undefined;
                    state.selectDate(date);
                    state.setFocusedDate(date);
                    isAnchorPressed.current = true;
                };
                // Start selection on mouse/touch down so users can drag to select a range.
                // On touch, delay dragging to determine if the user really meant to scroll.
                if (e.pointerType === 'touch') touchDragTimerRef.current = setTimeout(startDragging, 200);
                else startDragging();
            }
        },
        onPressEnd () {
            isRangeBoundaryPressed.current = false;
            isAnchorPressed.current = false;
            clearTimeout(touchDragTimerRef.current);
            touchDragTimerRef.current = undefined;
        },
        onPress () {
            // For non-range selection, always select on press up.
            if (!('anchorDate' in state) && !state.isReadOnly) {
                state.selectDate(date);
                state.setFocusedDate(date);
            }
        },
        onPressUp (e) {
            if (state.isReadOnly) return;
            // If the user tapped quickly, the date won't be selected yet and the
            // timer will still be in progress. In this case, select the date on touch up.
            // Timer is cleared in onPressEnd.
            if ('anchorDate' in state && touchDragTimerRef.current) {
                state.selectDate(date);
                state.setFocusedDate(date);
            }
            if ('anchorDate' in state) {
                if (isRangeBoundaryPressed.current) // start a new selection on press up to also allow dragging the date to
                // change the existing range.
                state.setAnchorDate(date);
                else if (state.anchorDate && !isAnchorPressed.current) {
                    // When releasing a drag or pressing the end date of a range, select it.
                    state.selectDate(date);
                    state.setFocusedDate(date);
                } else if (e.pointerType === 'keyboard' && !state.anchorDate) {
                    // For range selection, auto-advance the focused date by one if using keyboard.
                    // This gives an indication that you're selecting a range rather than a single date.
                    // For mouse, this is unnecessary because users will see the indication on hover. For screen readers,
                    // there will be an announcement to "click to finish selecting range" (above).
                    state.selectDate(date);
                    let nextDay = date.add({
                        days: 1
                    });
                    if (state.isInvalid(nextDay)) nextDay = date.subtract({
                        days: 1
                    });
                    if (!state.isInvalid(nextDay)) state.setFocusedDate(nextDay);
                } else if (e.pointerType === 'virtual') {
                    // For screen readers, just select the date on click.
                    state.selectDate(date);
                    state.setFocusedDate(date);
                }
            }
        }
    });
    let tabIndex = undefined;
    if (!isDisabled) tabIndex = (0, $cuS6T$internationalizeddate.isSameDay)(date, state.focusedDate) ? 0 : -1;
    // Focus the button in the DOM when the state updates.
    (0, $cuS6T$react.useEffect)(()=>{
        if (isFocused && ref.current) {
            (0, $cuS6T$reactariautils.focusWithoutScrolling)(ref.current);
            // Scroll into view if navigating with a keyboard, otherwise
            // try not to shift the view under the user's mouse/finger.
            // If in a overlay, scrollIntoViewport will only cause scrolling
            // up to the overlay scroll body to prevent overlay shifting.
            // Also only scroll into view if the cell actually got focused.
            // There are some cases where the cell might be disabled or inside,
            // an inert container and we don't want to scroll then.
            if ((0, $cuS6T$reactariainteractions.getInteractionModality)() !== 'pointer' && document.activeElement === ref.current) (0, $cuS6T$reactariautils.scrollIntoViewport)(ref.current, {
                containingElement: (0, $cuS6T$reactariautils.getScrollParent)(ref.current)
            });
        }
    }, [
        isFocused,
        ref
    ]);
    let cellDateFormatter = (0, $cuS6T$reactariai18n.useDateFormatter)({
        day: 'numeric',
        timeZone: state.timeZone,
        calendar: date.calendar.identifier
    });
    let formattedDate = (0, $cuS6T$react.useMemo)(()=>cellDateFormatter.formatToParts(nativeDate).find((part)=>part.type === 'day').value, [
        cellDateFormatter,
        nativeDate
    ]);
    return {
        cellProps: {
            role: 'gridcell',
            'aria-disabled': !isSelectable || undefined,
            'aria-selected': isSelected || undefined,
            'aria-invalid': isInvalid || undefined
        },
        buttonProps: (0, $cuS6T$reactariautils.mergeProps)(pressProps, {
            onFocus () {
                if (!isDisabled) state.setFocusedDate(date);
            },
            tabIndex: tabIndex,
            role: 'button',
            'aria-disabled': !isSelectable || undefined,
            'aria-label': label,
            'aria-invalid': isInvalid || undefined,
            'aria-describedby': [
                isInvalid ? errorMessageId : undefined,
                descriptionProps['aria-describedby']
            ].filter(Boolean).join(' ') || undefined,
            onPointerEnter (e) {
                // Highlight the date on hover or drag over a date when selecting a range.
                if ('highlightDate' in state && (e.pointerType !== 'touch' || state.isDragging) && isSelectable) state.highlightDate(date);
            },
            onPointerDown (e) {
                // This is necessary on touch devices to allow dragging
                // outside the original pressed element.
                // (JSDOM does not support this)
                if ('releasePointerCapture' in e.target) e.target.releasePointerCapture(e.pointerId);
            },
            onContextMenu (e) {
                // Prevent context menu on long press.
                e.preventDefault();
            }
        }),
        isPressed: isPressed,
        isFocused: isFocused,
        isSelected: isSelected,
        isDisabled: isDisabled,
        isUnavailable: isUnavailable,
        isOutsideVisibleRange: date.compare(state.visibleRange.start) < 0 || date.compare(state.visibleRange.end) > 0,
        isInvalid: isInvalid,
        formattedDate: formattedDate
    };
} //# sourceMappingURL=useCalendarCell.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $20e845123e697a89$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/useCalendar.main.js [app-ssr] (ecmascript)");
var $c49ada48cbc48220$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/useRangeCalendar.main.js [app-ssr] (ecmascript)");
var $a07388a797d86b95$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/useCalendarGrid.main.js [app-ssr] (ecmascript)");
var $4d833327a32c9193$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/dist/useCalendarCell.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useCalendar", ()=>$20e845123e697a89$exports.useCalendar);
$parcel$export(module.exports, "useRangeCalendar", ()=>$c49ada48cbc48220$exports.useRangeCalendar);
$parcel$export(module.exports, "useCalendarGrid", ()=>$a07388a797d86b95$exports.useCalendarGrid);
$parcel$export(module.exports, "useCalendarCell", ()=>$4d833327a32c9193$exports.useCalendarCell); /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */  //# sourceMappingURL=main.js.map
}),
];

//# sourceMappingURL=387af_%40react-aria_a5be7eea._.js.map