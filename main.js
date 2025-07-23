import { syncBasic } from "./01-sync-basic.js";
import { syncBlocking } from "./02-sync-blocking.js";
import { syncOptimize } from "./03-sync-optimize.js";
import { asyncBasic } from "./04-async-basic.js";
import { cbSync } from "./05-cb-sync.js";
import { cbAsync } from "./06-cb-async.js";
import { cbHell } from "./07-cb-hell.js";
import { promiseBasic } from "./08-promise-basic.js";
import { promiseOrderFood } from "./09-promise-order-food.js";
import { promiseChaining } from "./10-promise-chainning.js";
import { promiseAllOrders } from "./11-promise-all.js";
import { fetchDataBasic } from "./12-fetch-data-basic.js";
import { asyncAwaitBasic } from "./13-async-await-basic.js";
import { fetchDataAsync } from "./14-fetch-data-async.js";
import { fetchDataAsyncSingle } from "./15-try-catch-finally.js";

const runButton = document.getElementById("runCodeBtn");

runButton.addEventListener("click", () => {
	/* 01-sync-basic.js */
	syncBasic();
	/* 02-sync-blocking.js */
	// syncBlocking();
	/* 03-sync-optimize.js */
	// syncOptimize();
	/* 04-async-basic.js */
	// asyncBasic();
	/* 05-cb-sync.js */
	// cbSync();
	/* 06-cb-async.js */
	// cbAsync();
	/* 07-cb-hell.js */
	// cbHell();
	/* 08-promise-basic.js */
	// promiseBasic();
	/* 09-promise-order-food.js */
	// promiseOrderFood();
	/* 10-promise-chainning.js */
	// promiseChaining();
	/* 11-promise-all */
	// promiseAllOrders();
	/* 12-fetch-data-basic.js */
	// fetchDataBasic();
	/* 13-async-await-basic.js */
	// asyncAwaitBasic();
	/* 14-fetch-data-async.js */
	// fetchDataAsync();
	/* 15-try-catch-finally.js */
	// fetchDataAsyncSingle(10);
});
