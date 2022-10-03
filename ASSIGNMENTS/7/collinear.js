function collinear(points) {
    // slope of first and second points
    const slope1 = points[1][1] - points[0][1] / points[1][0] - points[0][0];
    // slope of second and third points
    const slope2 = points[2][1] - points[1][1] / points[2][0] - points[1][0];

    let isSlopeEqual = slope1 === slope2;

    let isXEqual = false;
    let isYEqual = false;

    // also check if each of coordinate (X or Y) is equal for all points
    for (let i = 0; i < 2; i++) {
        if (points[i][0] === points[i + 1][0]) {
            isXEqual = true;
        } else {
            isXEqual = false;
        }
        if (points[i][1] === points[i + 1][1]) {
            isYEqual = true;
        } else {
            isYEqual = false;
        }
    }

    // if any of this three condition is true it is a COLLINEAR
    if (isSlopeEqual || isXEqual || isYEqual) {
        console.log("Yes")
    } else {
        console.log("No")
    }
}

// const points = [[1, 1], [1, 6], [0, 9]];
const points = [[1, 1], [1, 4], [1, 5]];
collinear(points)