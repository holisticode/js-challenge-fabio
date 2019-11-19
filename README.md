# js-challenge

Your mission, should you choose to accept it, is to create a real-time feed of the value being transacted through the Ethereum blockchain.

**Time frame:** Around 12-16 hours. You should not spend more than 20 hours on this!

**Evaluation criteria:**
- Code quality
- Output correctness
- Internal API design
- Network and code performance
- **Impress us**! We'd prefer it if you did one thing really well rather than attempting to do a lot.

**Support:** At least one person will be responsive on [Aragon chat](https://aragon.chat) to answer any doubts or questions. If unsure, ping `@sohkai` or `@bpierre`.

## In-depth description

Your submitted challenge should visually display, in real-time as blocks are mined, the total monetary value being sent through the Ethereum blockchain.

For the sake of simplicitly, we can pretend that only ETH transfers are valuable and that we're only interested in the ETH directly sent from a end-user's account (included in each transaction object as `value`). You **do not** have to worry about tokens, unless you'd like to.

If getting to this point was fairly straightforward, you'll receive bonus points for adding an additional feature or two, e.g.:

- Additional real time information from on-chain sources
- Alternative visualizations
- Back-filling blocks
- Whatever you can come up with!

### Set up

We've added you as a collaborator to this repo, and you should push all work back to this repo for evaluation.

[src/data.js](./src/data.js) has been provided to help get you familiar with potentially useful APIs. You **do not** need to use them; their only purpose is to save you time if you're not already familiar with how to find the relevant data.

[src/index.js](./src/index.js) (run with `node src`) provides a snapshot of the information returned by these APIs. You'll want to change it 😉.

### Requirements

#### Technologies

We've provided rough scaffolding with vanilla JS and RxJS, but feel free to make any opinionated technology choices as you work on the challenge. If you're not sure, please ask; it's unlikely we'll say no unless it's something we don't know well enough to judge, i.e. purescript.

The challenge itself does not need to be executable in a browser but it would be ideal if any code unrelated to shell output could be easily made to run on a browser (e.g. with a bundling step).

#### Outputs

The output can come in any form, but **must** be updating in real-time as new blocks are mined.

Depending on your comfort level with different technologies, this may mean building a small site with values plotted on a graph, a console utility, a browser extension, or anything else that you can come up with!

Some potential libraries to help you create visual output:

- [asciichart](https://github.com/kroitor/asciichart)
- [aragonUI's LineChart](https://ui.aragon.org/line-chart/)
