import { calc } from 'frontend-utils';
export function moneyCount(row: any) {
	var category;
	var teikanTypeid = row.teikanTypeid;
	var quantity = row.quantity || 0;
	var weight = row.weight || 0;
	var costRcp = row.costRcp || 0;
	var cost = row.cost || 0;
	var price = row.price || 0;
	if (teikanTypeid == 0) {
		category = weight;
	} else {
		category = quantity;
	}
	return {
		costRcpAm: calc(category).times(costRcp).toNumber(),
		costAm: calc(category).times(cost).toNumber(),
		priceAm: calc(category).times(price).toNumber()
	};
}
