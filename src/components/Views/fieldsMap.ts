interface IfieldsMap {
  people: string[];
  starships: string[];
  planets: string[];
  [key: string]: string[];
}

const fieldsMap: IfieldsMap = {
  people: ['name', 'gender', 'eye_color'],
  starships: ['model', 'craft_class', 'lenght', 'cost'],
  planets: ['name', 'pupulation', 'rotation_period'],
};

export { fieldsMap };
