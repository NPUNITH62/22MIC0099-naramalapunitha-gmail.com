export const getTopNotifications = (notifications) => {

    const priorityMap = {
        Placement: 3,
        Result: 2,
        Event: 1
    };

    return [...notifications]

        .sort((a, b) => {

            const priorityDiff =
                priorityMap[b.Type] - priorityMap[a.Type];

            if (priorityDiff !== 0) {
                return priorityDiff;
            }

            return (
                new Date(b.Timestamp) -
                new Date(a.Timestamp)
            );
        })

        .slice(0, 10);
};