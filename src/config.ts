export const PARTITION_TABLE_SIZE = 0x9000; // 36KB reserved for the partition table
export const FLASH_SIZES = [
    { value: 4, text: '4 MB' },
    { value: 8, text: '8 MB' },
    { value: 16, text: '16 MB' }
];
export const PARTITION_TYPE_APP = "app"
export const PARTITION_TYPE_DATA = "data"
export const PARTITION_TYPES = [PARTITION_TYPE_APP, PARTITION_TYPE_DATA]
export const PARTITION_APP_SUBTYPES = ['factory', 'test', 'ota_0', 'ota_1', 'ota_2', 'ota_3', 'ota_4', 'ota_5', 'ota_6', 'ota_7', 'ota_8', 'ota_9', 'ota_10', 'ota_11', 'ota_12', 'ota_13', 'ota_14', 'ota_15']
export const PARTITION_DATA_SUBTYPES = ['ota', 'phy', 'nvs', 'nvs_keys', 'coredump', 'efuse', 'fat', 'spiffs', 'littlefs']