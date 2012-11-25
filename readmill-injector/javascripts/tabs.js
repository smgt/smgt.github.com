/**
 * Skeleton V1.1
 * Copyright 2011, Dave Gamache
 * www.getskeleton.com
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 8/17/2011
 */
(function(e){function t(){var t=window.location.hash,n=e('ul.tabs [href*="'+t+'"]'),r=e(t);n.length&&!n.hasClass("active")&&r.length&&(n.closest(".tabs").find(".active").removeClass("active"),n.addClass("active"),r.show().addClass("active").siblings().hide().removeClass("active"))}e(window).on("hashchange.skeleton",t),t(),e(t)})(jQuery);