export class Project {
  private _tags : string[];
  private _type : string;
  private _description : string;
  private _techno : string;
  private _images : string[];
  private _link : string;

  constructor(tags : string[], type : string, description : string, techno : string, images : string[], link : string) {
    this.tags = tags;
    this.type = type;
    this.description = description;
    this.images = images;
    this.link = link;
  }
  /**
     * Getter tags
     * @return {string[]}
     */
  public get tags() : string[] {
    return this._tags;
  }

  /**
     * Getter type
     * @return {string}
     */
  public get type() : string {return this._type;}

  /**
     * Getter description
     * @return {string}
     */
  public get description() : string {return this._description;}

  /**
     * Getter techno
     * @return {string}
     */
  public get techno() : string {return this._techno;}

  /**
     * Getter images
     * @return {string[]}
     */
  public get images() : string[] {
    return this._images;
  }

  /**
     * Getter link
     * @return {string}
     */
  public get link() : string {return this._link;}

  /**
     * Setter tags
     * @param {string[]} value
     */
  public set tags(value : string[]) {
    this._tags = value;
  }

  /**
     * Setter type
     * @param {string} value
     */
  public set type(value : string) {
    this._type = value;
  }

  /**
     * Setter description
     * @param {string} value
     */
  public set description(value : string) {
    this._description = value;
  }

  /**
     * Setter techno
     * @param {string} value
     */
  public set techno(value : string) {
    this._techno = value;
  }

  /**
     * Setter images
     * @param {string[]} value
     */
  public set images(value : string[]) {
    this._images = value;
  }

  /**
     * Setter link
     * @param {string} value
     */
  public set link(value : string) {
    this._link = value;
  }
}
