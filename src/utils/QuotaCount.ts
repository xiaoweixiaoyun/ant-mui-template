import { calc } from 'frontend-utils';
export function moneyCount(row: any) {
	var category;
	var teikanTypeId = row.teikanTypeId;
	var qty = row.qty || 0;
	var weight = row.weight || 0;
	var pcPrice = row.pcPrice || 0;
	var itemPrice = row.itemPrice || 0;
	var price = row.price || 0;
	if (teikanTypeId == 0) {
		category = weight;
	} else {
		category = qty;
	}
	return {
		pcPriceAll: calc(category).times(pcPrice).toNumber(),
		itemPriceAll: calc(category).times(itemPrice).toNumber(),
		priceAll: calc(category).times(price).toNumber()
	};
}
