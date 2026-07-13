type Container = {
    i_start: number;
    i_end: number;
    occupation: number[];
};

class Solution {
    calculateVolume(containers: Container[], height: number[]): number {
        return containers.reduce((acc, container, _) => {
            const h_start = height[container.i_start];
            const h_end = height[container.i_end];

            const h = Math.min(h_start, h_end);

            const w = container.i_end - container.i_start - 1;

            const real_occupied_volume = container.occupation.reduce(
                (oc_acc, occupation) => oc_acc + Math.min(occupation, h),
                0,
            );

            const free_volume = Math.max(h * w - real_occupied_volume, 0);

            console.log({ ...container, h_start, h_end, h, w, free_volume, real_occupied_volume });

            return acc + free_volume;
        }, 0);
    }

    isPeak(height: number[], i: number): boolean {
        return (height[i - 1] <= height[i] && height[i + 1] < height[i]) || i + 1 >= height.length;
    }

    debug(container: Container, height: number[]) {
        return {
            ...container,
            h_start: height[container.i_start],
            h_end: height[container.i_end],
        }
    }

    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        const containers: Container[] = [];

        let p1 = 0;
        let p2 = 0;
        let occupation: number[] = [];

        for (let i = 0; i < height.length; i++) {
            if (this.isPeak(height, i)) {
                p2 = i;

                let container: Container = {
                    i_start: p1,
                    i_end: p2,
                    occupation,
                };

                let previousContainer = containers[containers.length - 1];

                while (
                    previousContainer &&
                    height[previousContainer.i_end] <= height[container.i_end] &&
                    height[previousContainer.i_start] > height[previousContainer.i_end]
                ) {
                    console.log({
                        i_wanna_merge: {
                            this: this.debug(previousContainer, height),
                            with_that: this.debug(container, height),
                        },
                    })

                    const merged_occupation = [
                        ...container.occupation,
                        ...previousContainer.occupation,
                        height[container.i_start],
                    ];

                    container = {
                        i_start: previousContainer.i_start,
                        i_end: container.i_end,
                        occupation: merged_occupation,
                    };

                    console.log({
                        merge_result: container,
                    })

                    containers.pop();

                    previousContainer = containers[containers.length - 1];
                }

                console.log({ wont_merge: previousContainer ? this.debug(previousContainer, height) : null, with: this.debug(container, height) })

                containers.push(container);

                occupation = [];
                p1 = p2;
            }

            if (i !== p1 && i !== p2) {
                occupation.push(height[i]);
            }
        }

        return this.calculateVolume(containers, height);
    }
}