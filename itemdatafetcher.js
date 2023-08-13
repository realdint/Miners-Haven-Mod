fetch('https://raw.githubusercontent.com/realdint/Miners-Haven-Mod/main/items_data.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('items-container');

        data.forEach(item => {
            // Fetching thumbnail from Roblox's API
            fetch(`https://thumbnails.roblox.com/v1/assets/${item.ThumbnailId}/thumbnails`)
                .then(response => response.json())
                .then(thumbnailData => {
                    const imageUrl = thumbnailData.data[0].imageUrl;

                    const itemDiv = document.createElement('div');
                    itemDiv.className = 'item';

                    // Name
                    const itemName = document.createElement('h2');
                    itemName.textContent = item.ItemName;
                    itemDiv.appendChild(itemName);

                    // Image
                    const itemImage = document.createElement('img');
                    itemImage.src = imageUrl;
                    itemImage.alt = item.ItemName;
                    itemImage.className = 'thumbnail';
                    itemDiv.appendChild(itemImage);

                    // Description
                    const itemDescription = document.createElement('p');
                    itemDescription.textContent = item.Description;
                    itemDiv.appendChild(itemDescription);

                    // Tier
                    const itemTier = document.createElement('p');
                    itemTier.textContent = `Tier: ${item.TierName}`;
                    itemDiv.appendChild(itemTier);

                    // Hitbox
                    const itemHitbox = document.createElement('p');
                    itemHitbox.textContent = `Hitbox - X: ${item.HitboxSize.X}, Y: ${item.HitboxSize.Y}, Z: ${item.HitboxSize.Z}`;
                    itemDiv.appendChild(itemHitbox);

                    const itemMulti = document.createElement('p');
                    itemMulti.textContent = `Multi: ${item.Multi}`;
                    itemDiv.appendChild(itemMulti);

                    // Append to container
                    container.appendChild(itemDiv);
                });
        });
    })
    .catch(error => {
        console.error('Error fetching the items:', error);
    });
