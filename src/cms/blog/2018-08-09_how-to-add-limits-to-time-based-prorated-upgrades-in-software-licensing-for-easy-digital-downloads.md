---
path: >-
  /how-to-add-limits-to-time-based-prorated-upgrades-in-software-licensing-for-easy-digital-downloads
date: '2017-01-20T15:21:23-08:00'
title: >-
  How to add limits to time-based prorated upgrades in Software Licensing for
  Easy Digital Downloads
featured_image: /assets/software-licensing-product-image.png
---
In version 3.5 of the [Software Licensing](https://easydigitaldownloads.com/downloads/software-licensing/) add-on for [Easy Digital Downloads](https://easydigitaldownloads.com/) (EDD), they added support for time-based proration of license upgrades. This is great! I’ve been wanting this for a while now. I just wanted a little more control over how much the upgrade could be prorated.

I can understand offering a prorated discount after the first month or two of an initial purchase. Someone might purchase a 1-site/year license to play with, then decide a month later that they’d like to upgrade to a 5-site/year license to use on the rest of their sites. Let’s say that the 1-site license costs $20 and the 5-site license costs $50. So, the difference between the two licenses is $30. If the upgrade cost is prorated, then the cost to upgrade would go down by $2.50 every month. After one month in, it would cost $27.50; after two months in, it would cost $25. The price goes down each month until it’s time to renew.

The concept is great, but I wanted to be able to specify a maximum amount that the upgrade could be prorated. Let’s say that we want that amount to be 50% of the upgrade cost. So, once the upgrade prorated down to $15, that’s as low as it could go. For a 1-year license, the upgrade cost would go down every month…until the 6-month mark where it would stop of $15 (50%).

Luckily, the EDD team is top-notch and they already have filters in place to be able to accomplish this. I just had to add my filter. Ideally, you’ll want to place this code someplace where it won’t get overwritten during upgrades.

```php
add_filter( 'edd_sl_get_time_based_pro_rated_upgrade_cost', 'my_prefix_edd_sl_time_based_prorate_limit', 10, 4 );
function my_prefix_edd_sl_time_based_prorate_limit( $prorated, $license_id, $old_price, $new_price ) {

	$price_difference = $new_price - $old_price;
  	$protate_limit_percent = '50';
	$prorate_limit_price = round( ( $price_difference / 100 ) * $prorate_limit_percent );

	if ( $prorated < $prorate_limit_price ) {
		return round( $prorate_limit_price, edd_currency_decimal_filter() );
	}

	return $prorated;

}```
