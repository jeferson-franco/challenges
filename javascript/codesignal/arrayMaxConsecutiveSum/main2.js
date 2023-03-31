// This is a function that takes in two parameters: an inputArray (an array of numbers) and k (an integer). The purpose of the function is to find the maximum sum of k consecutive elements in the inputArray.
// The function first initializes two variables: inputArrayLen, which is the length of the inputArray and MaxConsecutiveSum, which is the current maximum consecutive sum found so far and is initially set to 0.
// The function then loops through the inputArray and, for each i from 0 to inputArrayLen - k + 1, it calculates the sum of k consecutive elements starting from the ith element of the array. This is done using the inner loop:
// for (var j = 0; j < k; j++) {
//     consecutiveSum += inputArray[i + j];
// }

// If this sum is greater than the current MaxConsecutiveSum, the function updates MaxConsecutiveSum to this new value.
// Finally, the function returns the MaxConsecutiveSum.

// solution by braulioceb
function solution(inputArray, k) {
    const inputArrayLen = inputArray.length;
    let MaxConsecutiveSum = 0;
    for (var i = 0; i < inputArrayLen - k + 1; i++) {
        let consecutiveSum = 0;
        for (var j = 0; j < k; j++) {
            consecutiveSum += inputArray[i + j];
        }
        if (consecutiveSum > MaxConsecutiveSum) {
            MaxConsecutiveSum = consecutiveSum;
        }
    }
    return MaxConsecutiveSum;
}

const assert = require('assert');
function testSolution() {
    try {
        let inputArray = [2, 3, 5, 1, 6];
        let k = 2;
        assert.deepStrictEqual(solution(inputArray, k), 8);
        console.log('Test 1: ', solution(inputArray, k));

        inputArray = [2, 4, 10, 1];
        k = 2;
        assert.deepStrictEqual(solution(inputArray, k), 14);
        console.log('Test 2: ', solution(inputArray, k));

        inputArray = [1, 3, 2, 4];
        k = 3;
        assert.deepStrictEqual(solution(inputArray, k), 9);
        console.log('Test 3: ', solution(inputArray, k));

        inputArray = [3, 2, 1, 1];
        k = 1;
        assert.deepStrictEqual(solution(inputArray, k), 3);
        console.log('Test 4: ', solution(inputArray, k));

        inputArray = [1, 3, 4, 2, 4, 2, 4];
        k = 4;
        assert.deepStrictEqual(solution(inputArray, k), 13);
        console.log('Test 5: ', solution(inputArray, k));

        inputArray = [768, 77, 755, 960, 747, 25, 107, 520, 995, 404, 43, 714, 632, 642, 493, 352, 450, 625, 262, 217, 254, 55, 661, 822, 562, 187, 603, 216, 275, 76, 75, 417, 350, 942, 1000, 232, 887, 173, 858, 116, 75, 170, 529, 26, 62, 378, 667, 444, 240, 325, 444, 391, 698, 282, 870, 611, 974, 388, 586, 616, 845, 591, 525, 976, 938, 673, 413, 862, 396, 856, 764, 415, 309, 27, 583, 630, 741, 988, 456, 807, 242, 624, 149, 524, 962, 960, 900, 199, 645, 36, 343, 943, 232, 781, 445, 670, 177, 889, 57, 519, 751, 982, 371, 373, 668, 527, 628, 495, 309, 223, 619, 516, 520, 378, 867, 646, 696, 961, 872, 850, 407, 995, 137, 779, 303, 670, 672, 470, 796, 423, 304, 21, 488, 83, 748, 825, 128, 23, 859, 475, 328, 403, 86, 278, 166, 814, 589, 95, 519, 230, 947, 781, 661, 132, 717, 24, 981, 244, 319, 463, 17, 708, 678, 248, 736, 306, 917, 659, 979, 699, 996, 610, 438, 519, 183, 726, 959, 751, 16, 3, 763, 734, 862, 279, 886, 323, 806, 659, 550, 215, 946, 480, 161, 198, 648, 517, 838, 268, 569, 807, 729, 139, 888, 577, 849, 976, 790, 209, 824, 807, 447, 74, 909, 681, 844, 495, 91, 33, 678, 407, 493, 307, 909, 651, 537, 282, 933, 389, 823, 308, 531, 212, 735, 911, 248, 952, 400, 309, 388, 57, 191, 982, 845, 194, 448, 406, 576, 333, 455, 549, 546, 602, 290, 534, 143, 32, 713, 859, 111, 106, 845, 817, 800, 100, 531, 126, 904, 330, 510, 111, 139, 131, 658, 458, 470, 508, 58, 808, 280, 549, 812, 272, 406, 925, 626, 667, 578, 125, 853, 234, 164, 326, 919, 785, 977, 792, 953, 978, 881, 730, 817, 720, 423, 583, 464, 941, 769, 137, 260, 579, 928, 753, 42, 746, 963, 546, 113, 464, 269, 481, 309, 853, 229, 395, 428, 499, 832, 253, 719, 822, 179, 119, 767, 792, 887, 334, 179, 7, 922, 469, 871, 356, 883, 282, 245, 949, 332, 493, 290, 410, 603, 55, 170, 21, 294, 377, 922, 868, 282, 54, 410, 406, 843, 397, 28, 134, 770, 457, 78, 563, 806, 722, 975, 725, 836, 189, 360, 871, 451, 770, 164, 249, 922, 829, 112, 96, 495, 116, 429, 284, 919, 451, 174, 661, 80, 455, 443, 274, 229, 626, 267, 399, 413, 301, 201, 21, 339, 181, 828, 232, 67, 827, 973, 698, 452, 295, 377, 736, 414, 994, 135, 39, 521, 786, 487, 842, 917, 278, 792, 438, 719, 644, 31, 748, 326, 841, 955, 903, 745, 489, 700, 955, 947, 903, 66, 964, 296, 455, 426, 493, 374, 489, 309, 241, 627, 406, 408, 319, 467, 698, 708, 220, 225, 463, 943, 834, 420, 584, 496, 720, 278, 585, 992, 359, 382, 393, 243, 110, 964, 344, 942, 545, 601, 397, 781, 275, 63, 541, 197, 19, 964, 985, 19, 465, 263, 62, 91, 694, 728, 712, 363, 190, 517, 919, 345, 72, 878, 887, 325, 735, 565, 471, 245, 855, 213, 639, 634, 404, 901, 758, 889, 782, 396, 847, 176, 514, 507, 996, 346, 647, 597, 378, 953, 902, 323, 273, 285, 521, 206, 311, 929, 754, 590, 619, 138, 377, 838, 223, 899, 167, 818, 292, 629, 205, 372, 796, 672, 399, 925, 616, 704, 432, 511, 164, 812, 504, 342, 730, 557, 349, 938, 692, 818, 06, 972, 497, 686, 982, 494, 22, 734, 468, 523, 548, 644, 913, 456, 479, 261, 741, 293, 444, 58, 835, 842, 54, 493, 874, 716, 371, 281, 921, 509, 309, 229, 610, 874, 229, 453, 258, 464, 386, 373, 909, 347, 12, 630, 391, 982, 812, 3, 618, 714, 327, 567, 56, 962, 817, 544, 512, 726, 667, 742, 745, 226, 900, 836, 86, 318, 122, 510, 949, 163, 220, 636, 921, 56, 543, 660, 366, 886, 45, 812, 225, 222, 363, 699, 335, 91, 231, 9, 477, 513, 473, 344, 509, 998, 809, 9, 643, 391, 521, 228, 211, 746, 760, 922, 365, 361, 705, 32, 219];
        k = 250;
        assert.deepStrictEqual(solution(inputArray, k), 135_845);
        console.log('Test 6: ', solution(inputArray, k));

        inputArray = [963, 741, 22, 851, 399, 382, 190, 247, 494, 452, 891, 532, 795, 920, 465, 831, 344, 391, 582, 897, 763, 951, 735, 806, 320, 702, 200, 59, 870, 345, 695, 321, 817, 83, 416, 36, 914, 335, 117, 985, 690, 303, 875, 556, 292, 309, 496, 791, 509, 360, 235, 784, 607, 341];
        k = 23;
        assert.deepStrictEqual(solution(inputArray, k), 14_232);
        console.log('Test 7: ', solution(inputArray, k));

        inputArray = [186, 923, 553, 569, 686, 316, 282, 709, 781, 93, 635, 789, 540, 569, 532, 882, 541, 549, 977, 44, 211, 737, 253, 436, 919, 521, 126, 346, 113, 716, 560, 690, 671, 673, 242, 662, 962, 935, 612, 691, 111, 809, 570, 551, 209, 732, 408, 181, 773, 306, 800, 688, 674, 957, 16, 513, 566, 954, 521, 248, 280, 670, 630, 106, 887, 789, 58, 990, 776, 256, 727, 588, 48, 926, 763, 820, 245, 261, 588, 786, 650, 634, 418, 41, 885, 673, 251, 827, 524, 678, 961, 877, 455, 441, 649, 294, 941, 733, 818, 789, 81, 899, 99, 696, 657, 753, 729, 383, 918, 575, 82, 294, 911, 353, 695, 571, 535, 367, 169, 267, 615, 27, 108, 363, 494, 486, 822, 833, 477, 858, 410, 930, 155, 15, 6, 471, 464, 369, 258, 277, 213, 247, 30, 66, 107, 361, 650, 402, 983, 470, 115, 384, 948, 971, 3, 642, 873, 679, 910, 745, 273, 368, 898, 213, 328, 258, 647, 833, 812, 348, 846, 119, 396, 46, 704, 416, 402, 478, 488, 777, 701, 107, 810, 845, 106, 251, 730, 702, 203, 906, 893, 162, 532, 579, 549, 865, 79, 903, 595, 749, 96, 675, 218, 185, 986, 159, 306, 389, 221, 194, 707, 461, 80, 595, 868, 949, 675, 996, 536, 676, 115, 503, 690, 19, 353, 248, 807, 981, 592, 915, 807, 986, 795, 501, 429, 163, 947, 977, 347, 539, 877, 793, 650, 336, 781, 269, 860, 60, 709, 71, 617, 693, 492, 572, 835, 89, 889, 697, 746, 795, 541, 463, 335, 225, 553, 133, 200, 368, 661, 639, 51, 880, 53, 204, 499, 794, 572, 245, 278, 819, 336, 988, 937, 823, 462, 180, 318, 198, 430, 752, 306, 569, 68, 504, 909, 674, 768, 801, 548, 241, 549, 542, 683, 360, 274, 736, 690, 546, 655, 561, 625, 298, 295, 221, 594, 289, 445, 839, 505, 127, 569, 629, 948, 433, 834, 569, 181, 651, 579, 992, 214, 409, 269, 328, 389, 577, 207, 974, 323, 529, 244, 643, 745, 851, 139, 831, 246, 521, 27, 330, 843, 104, 65, 588, 229, 912, 446, 917, 877, 432, 937, 647, 199, 471, 524, 669, 668, 828, 236, 381, 581, 18, 641, 189, 290, 133, 561, 907, 288, 967, 932, 623, 783, 100, 697, 767, 505, 515, 744, 507, 36, 427, 533, 346, 222, 639, 182, 367, 363, 372, 327, 678, 322, 730, 508, 691, 192, 255, 721, 610, 984, 454, 149, 744, 591, 274, 701, 527, 275, 153, 319, 983, 925, 849, 714, 489, 90, 698, 189, 38, 295, 244, 240, 419, 303, 892, 899, 661, 154, 272, 362, 847, 227, 893, 736, 384, 551, 968, 179, 359, 338, 367, 551, 385, 202, 593, 569, 903, 454, 48, 270, 163, 14, 381, 572, 314, 803, 917, 705, 164, 330, 783, 183, 498, 273, 840, 555, 754, 879, 715, 764, 440, 921, 135, 780, 216, 449, 148, 195, 752, 229, 70, 80, 882, 46, 460, 155, 439, 577, 825, 499, 3, 884, 682, 227, 431, 86, 506, 297, 215, 635, 439, 356, 176, 354, 78, 487, 864, 835, 125, 768, 351, 364, 771, 572, 259, 19, 22, 356, 960, 53, 499, 624, 483, 923, 961, 507, 572, 944, 692, 664, 124, 154, 968, 39, 428, 240, 355, 900, 318, 443, 824, 608, 491, 874, 433, 831, 435, 65, 530, 980, 326, 63, 459, 271, 419, 582, 915, 194, 218, 105, 911, 535, 829, 634, 755, 979, 641, 206, 105, 954, 187, 112, 213, 762, 808, 166, 384, 968, 372, 646, 414, 379, 83, 175, 450, 69, 109, 351, 799, 943, 299, 685, 691, 487, 522, 493, 694, 47, 471, 423, 652, 568, 749, 864, 214, 795, 152, 904, 800, 177, 548, 760, 971, 401, 785, 529, 776, 402, 195, 598, 505, 439, 99, 544, 834, 690, 380, 360, 941, 403, 135, 324, 34, 279, 312, 34, 925, 444, 41, 738, 569, 437, 591, 859, 995, 282, 418, 266, 528, 761, 621, 607, 671, 928, 789, 629, 760, 282, 267, 24, 701, 379, 549, 492, 97, 158, 915, 873, 270, 247, 484, 494, 676, 620, 71, 357, 85, 287, 842, 688, 79, 932, 338, 220, 319, 454, 983, 181, 485, 458, 441, 853, 917, 371, 936, 826, 503, 858, 410, 482, 833, 839, 17, 220, 95, 393, 320, 150, 912, 436, 912, 578, 850, 334, 350, 681, 554, 635, 523, 701, 376, 223, 997, 936, 264, 31, 621, 377, 605, 323, 695, 704, 598, 849, 60, 131, 987, 530, 140, 413, 956, 208, 3, 101, 633, 526, 850, 25, 431, 585, 145, 847, 322, 731, 182, 553, 903, 965, 994, 619, 723, 875, 457, 296, 160, 429, 945, 459, 591, 795, 554, 647, 437, 120, 266, 167, 88, 404, 645, 20, 515, 207, 967, 126, 351, 345, 707, 109, 113, 212, 397, 521, 266, 611, 995, 332, 772, 679, 103, 735, 778, 379, 210, 24, 737, 426, 124, 136, 449, 430, 722, 694, 588, 936, 115, 403, 700, 116, 648, 819, 914, 399, 198, 986, 224, 147, 252, 484, 658, 707, 109, 270, 431, 633, 355, 777, 211, 504, 160, 956, 156, 152, 252, 399, 88, 504, 64, 730, 340, 383, 503, 417, 39, 758, 252, 5, 919, 16, 857, 962, 750, 947, 338, 131, 469, 427, 732, 574, 306, 419, 350, 1, 182, 517, 584, 129, 593, 584, 559, 26, 978, 751, 20, 527, 229, 110, 487, 59, 6, 288, 998, 76, 380, 300, 101, 251, 529, 773, 688, 237, 312, 344, 922, 226, 517, 323, 133, 395, 354, 380, 345, 440, 980, 443, 480, 324, 867, 602, 816, 793, 553, 840, 270, 945, 983, 331, 737, 633, 475, 158, 265, 70, 776, 310, 668, 838, 121, 371, 503, 322, 738, 174, 277, 300, 708, 686, 579, 8, 58, 463, 449, 972, 989, 323, 596, 40, 843, 151, 904, 320, 789, 947, 207, 494, 206, 680, 909, 470, 66, 379, 634, 592, 894, 967, 152, 13, 262, 387, 738, 808, 452, 237];
        k = 785;
        assert.deepStrictEqual(solution(inputArray, k), 400_098);
        console.log('Test 8: ', solution(inputArray, k));

        inputArray = [152, 503, 151, 221, 768, 954, 236, 707, 927, 107, 648, 556, 979, 833, 754, 210, 911, 801, 673, 73, 696, 700, 188, 335, 581, 805, 197, 506, 622, 335, 854, 544, 727, 166, 941, 205, 44, 536, 544, 579, 611, 725, 630, 725, 462, 591, 809, 487, 921, 821, 270, 997, 514, 4, 821, 799, 609, 185, 342, 883, 519, 449, 98, 296, 965, 557, 406, 382, 672, 347, 844, 977, 851, 847, 668, 342, 652, 660, 494, 509, 508, 705, 855, 340, 119, 326, 692, 891, 871, 284, 111, 698, 625, 484, 124, 245, 163, 226, 707, 801, 228, 958, 539, 638, 37, 829, 394, 30, 451, 365, 881, 31, 877, 385, 864, 684, 700, 531, 793, 429, 692, 555, 496, 69, 297, 447, 462, 945, 740, 159, 847, 306, 633, 537, 49, 601, 451, 646, 17, 382, 395, 530, 498, 432, 384, 569, 128, 21, 344, 16, 659, 112, 478, 966, 398, 265, 732, 293, 681, 782, 707, 856, 38, 18, 661, 748, 7, 670, 270, 722, 266, 848, 750, 319, 527, 903, 460, 158, 774, 386, 255, 116, 27, 78, 566, 479, 57, 45, 965, 378, 507, 248, 737, 113, 204, 155, 472, 546, 351, 64, 575, 144, 755, 576, 481, 841, 662, 683, 43, 340, 134, 713, 904, 138, 164, 258, 894, 852, 262, 768, 44, 869, 144, 476, 85, 423, 43, 303, 334, 895, 188, 358, 560, 841, 556, 732, 715, 902, 721, 478, 445, 308, 463, 507, 307, 176, 874, 382, 608, 577, 991, 544, 397, 718, 531, 919, 520, 178, 224, 833, 581, 629, 620, 748, 359, 215, 188, 223, 750, 739, 408, 928, 835, 276, 292, 9, 501, 407, 894, 530, 606, 385, 444, 383, 230, 211, 87, 36, 902, 154, 83, 350, 283, 252, 742, 112, 617, 369, 127, 265, 600, 907, 320, 619, 6, 90, 225, 766, 129, 884, 620, 697, 939, 678, 808, 615, 890, 166, 378, 992, 126, 987, 108, 397, 44, 620, 217, 469, 883, 107, 286, 328, 8, 251, 430, 304, 874, 917, 63, 10, 567, 33, 731, 921, 829, 589, 39, 780, 516, 221, 688, 731, 54, 182, 653, 428, 61, 95, 934, 607, 43, 316, 547, 414, 913, 676, 140, 127, 990, 632, 491, 782, 635, 331, 736, 699, 575, 275, 799, 168, 695, 121, 914, 924, 806, 537, 430, 731, 136, 342, 785, 465, 340, 660, 493, 288, 538, 689, 743, 769, 984, 397, 585, 417, 979, 702, 932, 557, 627, 839, 123, 8, 781, 494, 872, 473, 601, 594, 103, 851, 552, 821, 370, 216, 686, 239, 659, 9, 493, 105, 375, 762, 54, 954, 36, 24, 7, 275, 528, 185, 865, 149, 406, 487, 784, 471, 82, 586, 312, 194, 536, 769, 819, 365, 718, 333, 231, 343, 219, 637, 292, 122, 67, 13, 618, 479, 66, 511, 496, 185, 297, 288, 138, 170, 791, 749, 684, 544, 711, 288, 535, 126, 474, 135, 392, 921, 212, 427, 61, 485, 686, 505, 423, 608, 154, 570, 561, 467, 450, 211, 701, 408, 433, 213, 274, 779, 642, 320, 222, 5, 369, 67, 305, 774, 444, 758, 916, 281, 476, 772, 441, 551, 676, 931, 945, 724, 100, 461, 303, 504, 722, 87, 928, 401, 823, 465, 66, 292, 193, 29, 459, 641, 797, 492, 678, 152, 500, 678, 717, 468, 1000, 29, 23, 77, 335, 883, 618, 420, 949, 669, 986, 971, 528, 562, 107, 289, 130, 370, 396, 585, 898, 320, 50, 847, 577, 249, 768, 524, 722, 898, 26, 275, 794, 428, 851, 401, 259, 35, 614, 213, 348, 715, 411, 634, 334, 817, 842, 33, 599, 645, 930, 472, 170, 384, 879, 938, 732, 935, 342, 178, 549, 812, 906, 20, 547, 213, 254, 65, 414, 588, 268, 323, 546, 834, 960, 157, 375, 666, 8, 651, 89, 293, 729, 438, 948, 559, 52, 971, 264, 120, 425, 464, 528, 718, 6, 864, 175, 139, 496, 358, 47, 713, 689, 834, 820, 397, 748, 174, 986, 280, 933, 365, 104, 501, 454, 889, 268, 283, 280, 492, 784, 971, 616, 97, 674, 706, 242, 594, 326, 10, 917, 390, 329, 827, 327, 743, 15, 793, 937, 75, 650, 565, 95, 491, 354, 884, 469, 23, 404, 808, 141, 201, 648, 138, 341, 359, 644, 994, 815, 448, 537, 104, 882, 132, 826, 905, 120, 233, 469, 610, 124, 782, 75, 355, 772, 826, 29, 451, 654, 867, 145, 568, 795, 685, 450, 833, 345, 909, 991, 690, 526, 686, 202, 323, 835, 235, 306, 924, 216, 748, 141, 50, 180, 258, 542, 147, 594, 156, 136, 292, 446, 861, 788, 296, 172, 528, 81, 366, 904, 925, 561, 30, 698, 248, 685, 72, 968, 145, 727, 621, 174, 339, 141, 744, 99, 851, 889, 758, 593, 404, 443, 29, 966, 826, 209, 524, 375, 135, 750, 515, 928, 351, 148, 711, 492, 412, 434, 464, 245, 746, 483, 521, 73, 305, 712, 234, 762, 531, 625, 413, 667, 116, 787, 651, 777, 293, 690, 483, 286, 464, 170, 654, 564, 831, 15, 202, 146, 219, 712, 973, 290, 127, 28, 737, 526, 814, 259, 109, 27, 24, 48, 227, 946, 994, 80, 18, 563, 554, 484, 297, 881, 346, 272, 348, 947, 107, 79, 295, 118, 37, 84, 593, 956, 418, 751, 105, 672, 59, 101, 225, 853, 568, 74, 383, 314, 651, 286, 321, 936, 10];
        k = 776;
        assert.deepStrictEqual(solution(inputArray, k), 377_666);
        console.log('Test 9: ', solution(inputArray, k));

        inputArray = [18, 872, 747, 579, 38, 773, 92, 53, 14, 93, 446, 276, 476, 547, 62, 911, 444, 134, 106, 914, 229, 528, 986, 370, 723, 374, 242, 666, 740, 976, 748, 259, 252, 947, 927, 247, 405, 289, 357, 761, 949, 894, 835, 664, 996, 956, 897, 710, 66, 409, 571, 336, 188, 848, 802, 298, 486, 513, 538, 425, 367, 328, 942, 664, 951, 162, 530, 990, 337, 510, 876, 169, 548, 884, 447, 171, 187, 618, 174, 45, 753, 980, 905, 927, 133, 841, 583, 569, 998, 354, 382, 189, 105, 551, 330, 151, 29, 488, 392, 100, 138, 270, 785, 735, 875, 323, 43, 524, 603, 406, 465, 903, 176, 92, 250, 7, 118, 850, 240, 289, 625, 261, 762, 795, 103, 780, 399, 567, 722, 535, 943, 116, 940, 492, 675, 194, 144, 966, 61, 744, 233, 874, 417, 795, 363, 734, 300, 570, 548, 337, 707, 317, 218, 325, 207, 851, 719, 816, 5, 666, 753, 372, 615, 343, 586, 613, 273, 43, 99, 39, 802, 388, 166, 53, 267, 748, 513, 237, 283, 804, 159, 747, 507, 588, 77, 824, 99, 58, 615, 884, 555, 367, 115, 459, 72, 542, 87, 40, 188, 671, 937, 785, 811, 558, 70, 910, 181, 600, 371, 258, 93, 904, 605, 649, 29, 904, 216, 176, 849, 224, 975, 687, 941, 243, 112, 1000, 30, 257, 122, 813, 540, 915, 232, 577, 30, 280, 620, 404, 507, 915, 403, 376, 217, 385, 407, 891, 377, 963, 305, 891, 952, 916, 542, 300, 639, 32, 127, 84, 90, 425, 647, 879, 971, 136, 44, 58, 326, 941, 94, 873, 390, 816, 829, 671, 279, 782, 720, 882, 417, 81, 766, 925, 255, 731, 743, 474, 92, 411, 477, 761, 60, 566, 784, 819, 577, 522, 440, 550, 507, 180, 933, 968, 470, 675, 213, 220, 349, 412, 672, 489, 912, 266, 725, 737, 863, 780, 233, 323, 923, 723, 469, 445, 973, 831, 1000, 935, 947, 212, 313, 400, 54, 457, 624, 72, 800, 804, 858, 987, 660, 262, 643, 743, 820, 346, 148, 858, 251, 728, 726, 314, 119, 191, 337, 107, 656, 26, 87, 204, 200, 965, 600, 387, 511, 899, 196, 903, 114, 275, 34, 565, 20, 313, 727, 473, 647, 683, 517, 807, 78, 573, 596, 713, 834, 561, 879, 791, 714, 799, 940, 151, 300, 793, 776, 190, 173, 239, 376, 573, 987, 627, 703, 378, 182, 281, 327, 631, 440, 997, 764, 421, 136, 194, 399, 679, 330, 96, 36, 402, 448, 599, 645, 773, 950, 554, 391, 89, 924, 817, 701, 830, 383, 727, 307, 588, 636, 552, 80, 926, 881, 318, 735, 362, 251, 956, 205, 730, 123, 373, 198, 812, 598, 312, 858, 723, 98, 247, 58, 771, 7, 476, 423, 684, 72, 642, 736, 855, 562, 512, 53, 501, 754, 17, 705, 526, 780, 705, 245, 499, 38, 850, 324, 43, 892, 819, 853, 545, 920, 807, 625, 857, 308, 280, 684, 566, 615, 835, 674, 161, 659, 659, 747, 819, 616, 664, 533, 784, 402, 375, 288, 293, 378, 319, 442, 26, 808, 791, 722, 692, 81, 314, 165, 883, 284, 706, 8, 701, 519, 152, 888, 803, 634, 265, 632, 299, 356, 561, 692, 127, 585, 80, 558, 460, 405, 603, 499, 872, 495, 919, 196, 566, 265, 98, 56, 197, 983, 916, 586, 259, 216, 532, 929, 637, 769, 568, 582, 499, 441, 975, 202, 555, 178, 369, 704, 710, 724, 963, 476, 703, 522, 806, 991, 116, 616, 262, 166, 122, 101, 967, 242, 143, 158, 287, 523, 804, 779, 108, 670, 684, 987, 648, 657, 392, 593, 990, 21, 736, 891, 761, 674, 891, 878, 561, 536, 217, 661, 598, 600, 630, 221, 826, 60, 531, 181, 669, 672, 380, 944, 891, 966, 331, 466, 659, 633, 501, 302, 171, 402, 838, 140, 953, 366, 466, 542, 782, 517, 417, 202, 956, 296, 542, 701, 857, 147, 792, 23, 936, 714, 951, 373, 669, 623, 993, 246, 92, 931, 144, 391, 530, 5, 274, 655, 765, 4, 638, 395, 851, 57, 602, 311, 657, 914, 488, 407, 410, 703, 364, 425, 407, 745, 23, 818, 547, 683, 832, 955, 116, 16, 643, 753, 639, 45, 314, 99, 609, 698, 847, 876, 8, 781, 663, 629, 165, 233, 451, 590, 658, 15, 854, 845, 397, 606, 876, 606, 180, 789, 546, 24, 854, 922, 720, 853, 599, 286, 442, 655, 110, 855, 267, 280, 142, 208, 643, 824, 246, 430, 296, 828, 38, 110, 346, 243, 126, 705, 586, 440, 374, 916, 158, 836, 694, 815, 201, 514, 244, 849, 707, 44, 789, 183, 366, 80, 25, 592, 484, 230, 627, 36, 359, 935, 479, 459, 896, 326, 145, 989, 872, 967, 271, 38, 920, 284, 569, 658, 854, 205, 591, 921, 368, 567, 787, 489, 503, 636, 618, 881, 880, 320, 277, 737, 581, 114, 794, 375, 393, 120, 116, 365, 276, 501, 203, 2, 721, 563, 76, 210, 239, 675, 322, 84, 375, 483, 810, 868, 905, 131];
        k = 671;
        assert.deepStrictEqual(solution(inputArray, k), 345_095);
        console.log('Test 10: ', solution(inputArray, k));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
